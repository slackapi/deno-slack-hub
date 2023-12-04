/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05A1NP97K6#/functions/start_meeting",
  title: "Start a meeting - BETA",
  description: "Creates a Google Meet link instantly",
  input_parameters: {
    properties: {
      google_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Google Access Token",
      },
    },
    required: ["google_access_token"],
  },
  output_parameters: {
    properties: {
      name: {
        type: Schema.types.string,
        description: "A unique server-generated ID for the meeting space",
        title: "Meeting ID",
      },
      meeting_link: {
        type: Schema.types.string,
        description: "A URL to identify and access the meeting space",
        title: "Meeting link",
      },
    },
    required: ["name", "meeting_link"],
  },
});
