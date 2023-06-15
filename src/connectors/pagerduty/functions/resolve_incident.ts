/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A04RSGH23L7#/functions/resolve_incident",
  title: "Resolve an incident",
  description: "Resolve a Pagerduty incident",
  input_parameters: {
    properties: {
      incident_id: {
        type: Schema.types.string,
        description: "Enter incident ID...",
        title: "Incident ID",
      },
      resolution_note: {
        type: Schema.types.string,
        description: "Enter a resolution note...",
        title: "Resolution note",
      },
      pagerduty_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Pagerduty access token",
        title: "PagerDuty access token",
      },
    },
    required: ["incident_id", "resolution_note", "pagerduty_access_token"],
  },
  output_parameters: {
    properties: {
      incident_id: {
        type: Schema.types.string,
        description: "Incident id",
        title: "Incident ID",
      },
      incident_url: {
        type: Schema.types.string,
        description: "Incident url",
        title: "Incident URL",
      },
      incident_title: {
        type: Schema.types.string,
        description: "Incident title",
        title: "Incident title",
      },
      status: {
        type: Schema.types.string,
        description: "Status",
        title: "Status",
      },
      resolution_note: {
        type: Schema.types.string,
        description: "Resolution note",
        title: "Resolution note",
      },
      last_status_change_by: {
        type: Schema.types.string,
        description: "Last status change by",
        title: "Last status change by...",
      },
      last_status_change_at: {
        type: Schema.types.string,
        description: "Last status change at",
        title: "Last status change at...",
      },
    },
    required: [
      "incident_id",
      "incident_url",
      "status",
      "resolution_note",
      "last_status_change_by",
      "last_status_change_at",
    ],
  },
});