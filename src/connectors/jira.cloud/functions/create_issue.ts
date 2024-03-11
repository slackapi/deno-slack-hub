/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A04T6GE3LEB#/functions/create_issue",
  title: "Create an issue",
  description: "Create a JIRA Cloud issue",
  input_parameters: {
    properties: {
      atlassian_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Atlassian Access Token",
      },
      jira_domain: { type: Schema.types.string, title: "Jira Domain" },
      project: { type: Schema.types.string, title: "Project" },
      issueType: {
        type: Schema.types.string,
        description:
          "Type of issue to create: Bug, Improvement, New Feature, or Epic.",
        title: "Issue type",
      },
      priority: {
        type: Schema.types.string,
        description: "Select an option...",
        title: "Priority",
      },
      assignee: {
        type: Schema.types.string,
        description: "Select an option...",
        title: "Assignee",
      },
      summary: {
        type: Schema.types.string,
        description: "Summary of the bug or issue...",
        title: "Summary",
      },
      description: {
        type: Schema.types.string,
        description: "Description of the bug or issue...",
        title: "Description",
      },
      custom_fields: { type: Schema.types.object, title: "Additional inputs" },
    },
    required: [
      "atlassian_access_token",
      "jira_domain",
      "project",
      "issueType",
      "summary",
    ],
  },
  output_parameters: {
    properties: {
      issue_id: {
        type: Schema.types.string,
        description: "Issue ID",
        title: "Issue ID",
      },
      project: {
        type: Schema.types.string,
        description: "Project",
        title: "Project",
      },
      summary: {
        type: Schema.types.string,
        description: "Summary of the bug or issue...",
        title: "Summary",
      },
      description: {
        type: Schema.types.string,
        description: "Description of the bug or issue...",
        title: "Description",
      },
      issue_type: {
        type: Schema.types.string,
        description: "Issue type",
        title: "Issue type",
      },
    },
    required: [],
  },
});
