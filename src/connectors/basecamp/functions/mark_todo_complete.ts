/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05UU55CFFA#/functions/mark_todo_complete",
  title: "Mark a to-do complete",
  input_parameters: {
    properties: {
      domain: {
        type: Schema.types.string,
        description: "Select an account",
        title: "Account",
      },
      project_id: {
        type: Schema.types.string,
        description: "Select a project",
        title: "Project",
      },
      todo_list_id: {
        type: Schema.types.string,
        description: "Select a to-do list",
        title: "To-do list",
      },
      todo_id: {
        type: Schema.types.string,
        description: "Select a to-do",
        title: "To-do",
      },
      basecamp_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Basecamp access token",
      },
    },
    required: [
      "domain",
      "project_id",
      "todo_list_id",
      "todo_id",
      "basecamp_access_token",
    ],
  },
  output_parameters: {
    properties: { id: { type: Schema.types.string, title: "To-do ID" } },
    required: ["id"],
  },
});
