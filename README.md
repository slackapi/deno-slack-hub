# deno-slack-connectors

Connectors used to build coded workflows for Run on Slack apps using Deno

## Workspace

### Toggles

- Follow the instruction in
  [Setting up your workspace for Development](https://corp.quip.com/POb2ApgEaxvL/HTTP-Functions-Usage-Guide#temp:C:dNGefc2a672fdd94b0f97f17a612)
- Add your team to
  [hermes_third_party_auth_end_user](https://houston.tinyspeck.com/experiments/4449135040515)
  toggle. (this allows apps to pass end user auth to connectors)

## Usage

import this project in your next gen deno project

use the connecotrs in a workflow

```ts
import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { Connectors } from "deno-slack-connectors/mod.ts";

const AnswerSurveyWorkflow = DefineWorkflow({
  callback_id: "answer_survey",
  title: "Respond to a survey",
  description: "Add comments and feedback to a survey",
  input_parameters: {
    properties: {
      interactivity: { type: Schema.slack.types.interactivity },
      google_spreadsheet_id: {
        type: Schema.types.string,
        description: "Spreadsheet ID for storing survey results",
      },
    },
    required: [
      "interactivity",
      "google_spreadsheet_id",
    ],
  },
});

const response = AnswerSurveyWorkflow.addStep(
  Schema.slack.functions.OpenForm,
  {
    title: "Survey your thoughts",
    description: "What do you think about the topic of this message?",
    interactivity: AnswerSurveyWorkflow.inputs.interactivity,
    submit_label: "Share",
    fields: {
      elements: [{
        name: "comments",
        title: "Comments",
        type: Schema.types.string,
        description: "Any additional ideas to share?",
        long: true,
      }],
      required: ["comment"],
    },
  },
);

AnswerSurveyWorkflow.addStep(Connectors.GoogleSheets.AddSpreadsheetRow, {
  google_access_token: {
    credential_source: "END_USER",
  },
  spreadsheet_id: AnswerSurveyWorkflow.inputs.google_spreadsheet_id,
  columns: [
    "=NOW()",
    response.outputs.fields.impression,
    response.outputs.fields.comments || "",
  ],
  sheet_title: "Responses",
});
```
