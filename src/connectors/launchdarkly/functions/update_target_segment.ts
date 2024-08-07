/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05RF94AFB3#/functions/update_target_segment",
  title: "Update a target in a segment",
  description: "Add/remove a target to include/exclude in a segment",
  input_parameters: {
    properties: {
      project_key: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Project",
      },
      environment_key: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Environment key",
      },
      segment_key: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Segment",
      },
      kind: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Target operation",
        enum: [
          "addIncludedTargets",
          "removeIncludedTargets",
          "addExcludedTargets",
          "removeExcludedTargets",
        ],
      },
      context_kind_key: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Context kind",
      },
      target_key: {
        type: Schema.types.array,
        description: "Please add one or more target keys",
        title: "Target key",
        items: { type: Schema.types.string },
      },
      comment: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Comment",
      },
      launchdarkly_access_token: {
        type: Schema.slack.types.oauth2,
        description: "LaunchDarkly Credential to use",
        title: "LaunchDarkly access token",
      },
    },
    required: [
      "project_key",
      "environment_key",
      "segment_key",
      "kind",
      "context_kind_key",
      "target_key",
      "launchdarkly_access_token",
    ],
  },
  output_parameters: {
    properties: {
      name: {
        type: Schema.types.string,
        description: "Segment name",
        title: "Segment name",
      },
      description: {
        type: Schema.types.string,
        description: "Segment description",
        title: "Segment description",
      },
      key: {
        type: Schema.types.string,
        description: "Segment key",
        title: "Segment key",
      },
      environment_key: {
        type: Schema.types.string,
        description: "Environment key",
        title: "Environment key",
      },
      comment: {
        type: Schema.types.string,
        description: "Update target comment",
        title: "Update target comment",
      },
      kind: {
        type: Schema.types.string,
        description: "Target operation type",
        title: "Target operation",
      },
    },
    required: ["name"],
  },
});
