/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05RT1HSRRU#/functions/update_card",
  title: "Update a card",
  input_parameters: {
    properties: {
      card_id: {
        type: Schema.types.string,
        description: "Select a card",
        title: "Card",
      },
      card_title: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Title",
      },
      share_status: {
        type: Schema.types.string,
        description: "Select an option",
        title: "Access",
        enum: ["TEAM", "PRIVATE"],
      },
      content: {
        type: Schema.types.string,
        description: "Content of the card",
        title: "Content",
      },
      guru_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Whose account should be used?",
        title: "Guru Access Token",
      },
    },
    required: ["card_id", "share_status", "guru_access_token"],
  },
  output_parameters: {
    properties: {
      card_id: { type: Schema.types.string, title: "Card ID" },
      card_title: {
        type: Schema.types.string,
        description: "Title of the card",
        title: "Card title",
      },
      card_url: {
        type: Schema.types.string,
        description: "URL of the card",
        title: "Card URL",
      },
      verification_state: {
        type: Schema.types.string,
        description: "Verification state of the card",
        title: "Verification state",
      },
    },
    required: ["card_id", "card_title", "card_url"],
  },
});
