/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05RF94AFB3#/functions/update_target_feature_flag",
  title: "Update a target in a feature flag",
  description: "Add or remove a target from a feature flag",
  input_parameters: {
    properties: {
      project_key: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Project",
      },
      feature_flag_key: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Feature flag",
      },
      environment_key: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Environment key",
      },
      variation_id: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Feature flag variation",
      },
      kind: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Target operation",
        enum: ["addTargets", "removeTargets"],
      },
      context_kind_key: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Target type",
      },
      target_key: {
        type: Schema.types.array,
        description: "Enter text",
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
      "feature_flag_key",
      "environment_key",
      "variation_id",
      "kind",
      "target_key",
      "launchdarkly_access_token",
    ],
  },
  output_parameters: {
    properties: {
      name: {
        type: Schema.types.string,
        description: "Feature flag name",
        title: "Feature flag name",
      },
      description: {
        type: Schema.types.string,
        description: "Feature flag description",
        title: "Feature flag description",
      },
      key: {
        type: Schema.types.string,
        description: "Feature flag key",
        title: "Feature flag key",
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