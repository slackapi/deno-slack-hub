/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineFunction } from "../../deps.ts";
import { Schema } from "../../deps.ts";

export default DefineFunction({
  callback_id: "slack#/functions/create_issue",
  source_file: "",
  title: "Create an issue",
  description: "Creates a new GitHub issue",
  input_parameters: {
    properties: {
      repository: {
        type: Schema.types.string,
        description: "Select a GitHub repository",
        title: "Repository",
      },
      title: { type: Schema.types.string, title: "Title" },
      description: { type: Schema.types.string, title: "Description" },
      github_access_token: {
        type: Schema.slack.types.oauth2,
        description: "GitHub Credential to use",
        title: "Github Access Token",
      },
    },
    required: ["repository", "title", "github_access_token"],
  },
  output_parameters: {
    properties: {
      issue_number: {
        type: Schema.types.string,
        description: "New issue ID",
        title: "Issue number",
      },
      issue_url: {
        type: Schema.types.string,
        description: "New issue URL",
        title: "Issue URL",
      },
    },
    required: ["issue_number", "issue_url"],
  },
});
