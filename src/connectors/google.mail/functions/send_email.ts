/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05Q7MZ8WH1#/functions/send_email",
  title: "Send an email",
  input_parameters: {
    properties: {
      subject: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Subject",
      },
      email_body: {
        type: Schema.slack.types.rich_text,
        description: "Enter text",
        title: "Email body",
      },
      html: {
        type: Schema.types.boolean,
        description:
          "Select this if your content looks like this: <b>This text is bold</b>",
        title: "Email body contains HTML text formatting",
      },
      recipients: {
        type: Schema.types.array,
        description: "Search all people...",
        title: "Recipients",
        items: { type: Schema.slack.types.user_id },
      },
      additional_recipients: {
        type: Schema.types.array,
        description: "Enter email addresses",
        title: "Additional Recipients",
        items: { type: Schema.types.string },
      },
      cc_recipients: {
        type: Schema.types.array,
        description: "Enter email addresses",
        title: "CC Recipients",
        items: { type: Schema.types.string },
      },
      bcc_recipients: {
        type: Schema.types.array,
        description: "Enter email addresses",
        title: "BCC Recipients",
        items: { type: Schema.types.string },
      },
      google_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Google access token",
        title: "Google access token",
      },
    },
    required: ["subject", "email_body", "google_access_token"],
  },
  output_parameters: { properties: {}, required: [] },
});
