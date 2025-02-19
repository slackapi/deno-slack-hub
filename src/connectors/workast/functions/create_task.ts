/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A0630UXR0AE#/functions/create_task",
  title: "Create a task",
  input_parameters: {
    properties: {
      workast_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Workast Access Token",
      },
      space_id: {
        type: Schema.types.string,
        description: "Select the space where the task is created",
        title: "Space",
      },
      list_id: {
        type: Schema.types.string,
        description: "Select which list the task is created in",
        title: "List",
      },
      summary: {
        type: Schema.types.string,
        description: "Enter a summary",
        title: "Summary",
      },
      description: {
        type: Schema.types.string,
        description: "Enter a description",
        title: "Description",
      },
      assignees: {
        type: Schema.types.array,
        description: "Select assignees",
        title: "Assign to",
        items: { type: Schema.slack.types.user_id },
      },
      due_date: { type: Schema.slack.types.date, title: "Due date" },
    },
    required: ["workast_access_token", "space_id", "summary"],
  },
  output_parameters: {
    properties: {
      id: { type: Schema.types.string, title: "Task ID" },
      task_url: { type: Schema.types.string, title: "Task URL" },
      status: { type: Schema.types.string, title: "Status" },
    },
    required: ["id", "task_url"],
  },
});
