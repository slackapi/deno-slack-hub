/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05TG2LEXPV#/functions/update_incident",
  title: "Update an incident",
  input_parameters: {
    properties: {
      incident_id: {
        type: Schema.types.string,
        description: "Select an incident",
        title: "Incident",
      },
      name: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Incident name",
      },
      description: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Description",
      },
      priority: {
        type: Schema.types.string,
        description: "Select an option",
        title: "Priority",
      },
      severity: {
        type: Schema.types.string,
        description: "Select an option",
        title: "Severity",
      },
    },
    required: ["incident_id"],
  },
  output_parameters: {
    properties: {
      incident_id: { type: Schema.types.string, title: "Incident ID" },
      incident_url: { type: Schema.types.string, title: "Incident URL" },
      incident_description: {
        type: Schema.types.string,
        title: "Incident description",
      },
      priority: { type: Schema.types.string, title: "Incident priority" },
      severity: { type: Schema.types.string, title: "Incident severity" },
    },
    required: [],
  },
});
