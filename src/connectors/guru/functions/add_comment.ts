/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05RT1HSRRU#/functions/add_comment",
  title: "Add a comment",
  input_parameters: {
    properties: {
      card_id: {
        type: Schema.types.string,
        description: "Select a card",
        title: "Card",
      },
      comment: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Comment",
      },
      guru_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Whose account should be used?",
        title: "Guru Access Token",
      },
    },
    required: ["card_id", "comment", "guru_access_token"],
  },
  output_parameters: {
    properties: {
      comment: { type: Schema.types.string, title: "Comment" },
      comment_id: { type: Schema.types.string, title: "Comment ID" },
    },
    required: ["comment", "comment_id"],
  },
});
