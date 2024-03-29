/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05UU55CFFA#/functions/create_project",
  title: "Create a project",
  input_parameters: {
    properties: {
      domain: {
        type: Schema.types.string,
        description: "Select an account",
        title: "Account",
      },
      name: {
        type: Schema.types.string,
        description: "Enter project name",
        title: "Project name",
      },
      description: {
        type: Schema.types.string,
        description: "Enter project description",
        title: "Description",
      },
      basecamp_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Basecamp access token",
      },
    },
    required: ["domain", "name", "basecamp_access_token"],
  },
  output_parameters: {
    properties: {
      id: { type: Schema.types.string, title: "Project ID" },
      name: { type: Schema.types.string, title: "Project name" },
      url: { type: Schema.types.string, title: "Project URL" },
    },
    required: ["id", "name", "url"],
  },
});
