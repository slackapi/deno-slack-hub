/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05Q8KLHEHJ#/functions/create_issue",
  title: "Create an issue",
  description: "Create a Bitbucket Cloud issue",
  input_parameters: {
    properties: {
      workspace: {
        type: Schema.types.string,
        description: "Enter bitbucket workspace",
        title: "Bitbucket workspace",
      },
      repo_slug: {
        type: Schema.types.string,
        description: "Enter repository name",
        title: "Repository",
      },
      title: {
        type: Schema.types.string,
        description: "Title of the issue",
        title: "Title",
      },
      description: {
        type: Schema.types.string,
        description: "Description of the issue",
        title: "Description",
      },
      kind: {
        type: Schema.types.string,
        description: "Issue kind",
        title: "Kind",
        enum: ["bug", "enhancement", "proposal", "task"],
      },
      priority: {
        type: Schema.types.string,
        description: "Priority of the issue",
        title: "Priority",
        enum: ["trivial", "minor", "major", "critical", "blocker"],
      },
      assignee_uuid: {
        type: Schema.types.string,
        description: "Select an option...",
        title: "Assignee",
      },
      bitbucket_access_token: {
        type: Schema.slack.types.oauth2,
        title: "bitbucket access token",
      },
    },
    required: [
      "workspace",
      "repo_slug",
      "title",
      "description",
      "assignee_uuid",
      "bitbucket_access_token",
    ],
  },
  output_parameters: {
    properties: {
      issue_id: {
        type: Schema.types.string,
        description: "Id of the issue",
        title: "Issue ID",
      },
      title: {
        type: Schema.types.string,
        description: "Title of the issue",
        title: "Title",
      },
      kind: {
        type: Schema.types.string,
        description: "Kind of the issue",
        title: "Kind",
      },
      priority: {
        type: Schema.types.string,
        description: "Priority of the issue",
        title: "Priority",
      },
      issue_url: {
        type: Schema.types.string,
        description: "URL of the issue",
        title: "Issue URL",
      },
    },
    required: [],
  },
});
