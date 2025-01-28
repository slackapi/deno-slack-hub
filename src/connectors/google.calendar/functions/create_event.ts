/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A050C90PUF5#/functions/create_event",
  title: "Create a calendar event",
  input_parameters: {
    properties: {
      google_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Google credential to use",
        title: "Google access token",
      },
      start_time: {
        type: Schema.slack.types.timestamp,
        description: "Start time for event",
        title: "Start time",
      },
      end_time: {
        type: Schema.slack.types.timestamp,
        description: "End time for event",
        title: "End time",
      },
      attendees: {
        type: Schema.types.array,
        description: "Search all people...",
        title: "Attendees",
        items: { type: Schema.slack.types.user_id },
      },
      additional_attendees: {
        type: Schema.types.array,
        description: "Enter email addresses",
        title: "Additional attendees",
        items: { type: Schema.types.string },
      },
      summary: {
        type: Schema.types.string,
        description: "Event title",
        title: "Title",
      },
      location: {
        type: Schema.types.string,
        description: "Location of event",
        title: "Location",
      },
      description: {
        type: Schema.types.string,
        description: "Description of event",
        title: "Description",
      },
    },
    required: ["start_time", "end_time"],
  },
  output_parameters: {
    properties: {
      event_id: {
        type: Schema.types.string,
        description: "Calendar event ID",
        title: "Event ID",
      },
      event_link: {
        type: Schema.types.string,
        description: "Calendar event link",
        title: "Event link",
      },
      calendar_id: { type: Schema.types.string, title: "Calendar ID" },
    },
    required: [],
  },
});
