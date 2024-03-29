/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A0660D0LBV3#/functions/remove_tags",
  title: "Remove tags",
  description: "Remove tags on a ticket without affecting existing ones",
  input_parameters: {
    properties: {
      ticket_id: {
        type: Schema.types.integer,
        description: "Enter ticket ID",
        title: "Ticket ID",
      },
      remove_tags: {
        type: Schema.types.array,
        title: "Remove tags",
        items: { type: Schema.types.string },
      },
      zendesk_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Zendesk credential to use",
        title: "Zendesk Access Token",
      },
    },
    required: ["ticket_id", "zendesk_access_token"],
  },
  output_parameters: {
    properties: {
      ticket_id: { type: Schema.types.integer, title: "Ticket ID" },
      ticket_url: {
        type: Schema.types.string,
        description: "The ticket URL",
        title: "Ticket URL",
      },
      status: { type: Schema.types.string, title: "Status" },
      removed_tags: {
        type: Schema.types.array,
        title: "Removed tags",
        items: { type: Schema.types.string },
      },
    },
    required: ["ticket_id", "ticket_url", "status", "removed_tags"],
  },
});
