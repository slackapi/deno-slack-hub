/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A050HLW5TFV#/functions/create_issue",
  title: "Create an issue",
  description: "Create a GitLab issue",
  input_parameters: {
    properties: {
      project_id: {
        type: Schema.types.string,
        description: "The ID of the project where the issue is created",
        title: "Project",
      },
      title: {
        type: Schema.types.string,
        description: "Enter an issue title...",
        title: "Title",
      },
      description: {
        type: Schema.types.string,
        description: "Enter a description...",
        title: "Description",
      },
      issue_type: {
        type: Schema.types.string,
        description: "The type of issue. Valid options are: issue or incident",
        title: "Issue type",
      },
      milestone_id: {
        type: Schema.types.string,
        description: "The Global ID of a milestone to assign the issue",
        title: "Milestone",
      },
      confidential: {
        type: Schema.types.boolean,
        description:
          "Set the issue to be confidential and only be visible to team members with at least reporter access",
        title: "Confidential",
      },
      gitlab_access_token: {
        type: Schema.slack.types.oauth2,
        title: "GitLab Access Token",
      },
    },
    required: [
      "project_id",
      "title",
      "issue_type",
      "confidential",
      "gitlab_access_token",
    ],
  },
  output_parameters: {
    properties: {
      issue_iid: {
        type: Schema.types.string,
        description:
          "The issue's internal ID that is unique in the scope of the project",
        title: "Internal issue ID",
      },
      issue_url: {
        type: Schema.types.string,
        description: "The link to the issue on gitlab.com",
        title: "Issue URL",
      },
      issue_reference: {
        type: Schema.types.string,
        description:
          "A reference path to the issue in a group/project. Can be used for crosslinking issues.",
        title: "Issue reference",
      },
      title: {
        type: Schema.types.string,
        description: "The title of the issue",
        title: "Title",
      },
      description: {
        type: Schema.types.string,
        description: "The description of the issue",
        title: "Description",
      },
      issue_type: {
        type: Schema.types.string,
        description: "The type of issue",
        title: "Issue type",
      },
      milestone: {
        type: Schema.types.string,
        description: "The milestone the issue is assign to",
        title: "Milestone",
      },
      confidential: {
        type: Schema.types.boolean,
        description: "If the issue is confidential",
        title: "Confidential",
      },
    },
    required: [
      "issue_iid",
      "issue_url",
      "issue_reference",
      "title",
      "issue_type",
      "confidential",
    ],
  },
});