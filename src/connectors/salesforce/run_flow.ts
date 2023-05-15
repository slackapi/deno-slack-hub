/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { ConnectorDefinition } from "../../connectors.ts";
import { Schema } from "../../deps.ts";

export default new ConnectorDefinition({
  callback_id: "A04T99UKKQE#/functions/run_flow",
  source_file: "",
  title: "Run a Salesforce Flow - Beta",
  description: "Run an Autolaunched Salesforce Flow",
  input_parameters: {
    properties: {
      domain: { type: Schema.types.string, title: "Salesforce domain" },
      flow_name: {
        type: Schema.types.string,
        description: "Flow name (only autolaunched flows are supported)",
        title: "Flow name (only autolaunched flows are supported)",
      },
      metadata: {
        type: Schema.types.string,
        title: "JSON formatted metadata input (TS Only/WIP UI)",
      },
      salesforce_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Salesforce Access Token",
      },
    },
    required: ["domain", "flow_name", "metadata"],
  },
  output_parameters: {
    properties: { success: { type: Schema.types.boolean, title: "Response" } },
    required: [],
  },
});
