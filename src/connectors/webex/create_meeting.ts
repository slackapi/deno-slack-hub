/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineFunction } from "../../deps.ts";
import { Schema } from "../../deps.ts";

export default DefineFunction({
  callback_id: "A050R5T1K6X#/functions/create_meeting",
  source_file: "",
  title: "Create a meeting",
  description: "Create a scheduled Webex meeting",
  input_parameters: {
    properties: {
      title: {
        type: Schema.types.string,
        description: "A title for the meeting",
        title: "Title",
      },
      agenda: {
        type: Schema.types.string,
        description: "An agenda for the meeting",
        title: "Agenda",
      },
      start_time: {
        type: Schema.slack.types.timestamp,
        description: "The date, time, and timezone when the meeting starts",
        title: "Start time",
      },
      end_time: {
        type: Schema.slack.types.timestamp,
        description: "The date, time, and timezone when the meeting ends",
        title: "End time",
      },
      invitees: {
        type: Schema.types.array,
        description: "Invitees for the meeting",
        title: "Invitees",
        items: { type: Schema.slack.types.user_id },
      },
      webex_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Webex access token",
      },
    },
    required: ["title", "start_time", "end_time", "webex_access_token"],
  },
  output_parameters: {
    properties: {
      meeting_id: {
        type: Schema.types.string,
        description: "A unique identifier for meeting",
        title: "Meeting ID",
      },
      meeting_link: {
        type: Schema.types.string,
        description:
          "A link to a meeting information page where the meeting client is launched if the meeting is ready to start or join",
        title: "Meeting link",
      },
      meeting_number: {
        type: Schema.types.number,
        description: "The meeting number which can be used to join the meeting",
        title: "Meeting number",
      },
      site_url: {
        type: Schema.types.string,
        description: "The Webex site URL",
        title: "Site URL",
      },
      host_webex_id: {
        type: Schema.types.string,
        description: "A unique identifier for the meeting host",
        title: "Host Webex ID",
      },
      invitee_emails: {
        type: Schema.types.array,
        description: "Comma-separated list of invitee emails",
        title: "Invitee emails",
        items: { type: Schema.types.string },
      },
    },
    required: [
      "meeting_id",
      "meeting_link",
      "meeting_number",
      "site_url",
      "host_webex_id",
    ],
  },
});
