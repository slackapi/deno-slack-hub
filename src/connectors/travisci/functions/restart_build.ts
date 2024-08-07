/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A0619K2GN2W#/functions/restart_build",
  title: "Restart build",
  input_parameters: {
    properties: {
      repo_slug: { type: Schema.types.string, title: "Repository" },
      branch: {
        type: Schema.types.string,
        description: "Select a branch",
        title: "Branch",
      },
      build_id: {
        type: Schema.types.integer,
        description: "Select a build ID",
        title: "Build ID",
      },
    },
    required: ["repo_slug", "branch", "build_id"],
  },
  output_parameters: {
    properties: {
      build_id: { type: Schema.types.integer, title: "Build ID" },
      branch: { type: Schema.types.string, title: "Branch" },
      repository: { type: Schema.types.string, title: "Repository" },
      build_url: { type: Schema.types.string, title: "Build URL" },
    },
    required: [],
  },
});
