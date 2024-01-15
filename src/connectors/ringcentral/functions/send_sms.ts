/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05M3UW6YEN#/functions/send_sms",
  title: "Send a SMS",
  input_parameters: {
    properties: {
      sender_nb: {
        type: Schema.types.string,
        description: "Enter number",
        title: "Sender's number",
      },
      recipient_nb: {
        type: Schema.types.string,
        description: "Enter number",
        title: "Recipient's number",
      },
      content: {
        type: Schema.types.string,
        description: "Message",
        title: "Message content",
      },
      ringcentral_access_token: {
        type: Schema.slack.types.oauth2,
        description: "RingCentral Credential to use",
        title: "RingCentral access token",
      },
    },
    required: [
      "sender_nb",
      "recipient_nb",
      "content",
      "ringcentral_access_token",
    ],
  },
  output_parameters: {
    properties: {
      subject: {
        type: Schema.types.string,
        description: "Contents of the SMS message sent",
        title: "SMS content",
      },
      id: {
        type: Schema.types.string,
        description: "Identifier of the sent SMS message",
        title: "SMS ID",
      },
      message_status: {
        type: Schema.types.string,
        description: "Status of the SMS message",
        title: "SMS status",
      },
      delivery_time: {
        type: Schema.types.string,
        description: "Time when the SMS message was delivered",
        title: "SMS delivery time",
      },
      delivery_error_code: {
        type: Schema.types.string,
        description: "Error code if the SMS message was not able to send",
        title: "SMS delivery error code",
      },
    },
    required: [
      "subject",
      "id",
      "message_status",
      "delivery_time",
      "delivery_error_code",
    ],
  },
});