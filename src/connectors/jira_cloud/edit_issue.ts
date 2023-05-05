/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineFunction } from "../../deps.ts";
import { Schema } from "../../deps.ts";

export default DefineFunction({
  callback_id: "slack#/functions/edit_issue",
  source_file: "",
  title: "Jira Cloud - Edit an Issue",
  description:
    "Edit an issue in a Jira Cloud instance right from Slack. Does not support Jira Server.",
  input_parameters: {
    properties: {
      atlassian_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Atlassian Access Token",
      },
      jira_domain: { type: Schema.types.string, title: "Jira Domain" },
      issue_id: {
        type: Schema.types.string,
        description: "Issue ID",
        title: "Issue ID",
      },
      summary: {
        type: Schema.types.string,
        description: "Summary of the bug or issue to edit.",
        title: "Summary",
      },
      description: {
        type: Schema.types.string,
        description: "Description of the bug or issue to edit.",
        title: "Description",
      },
    },
    required: ["jira_domain", "issue_id"],
  },
  output_parameters: {
    properties: {
      status: {
        type: Schema.types.string,
        description: "Response Status",
        title: "Response Status",
      },
    },
    required: ["status"],
  },
});
