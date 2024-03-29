/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05TPV44YKG#/functions/get_campaign_report",
  title: "Get campaign report",
  input_parameters: {
    properties: {
      mailchimp_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Mailchimp access token",
      },
      campaign_id: {
        type: Schema.types.string,
        description: "Select a campaign",
        title: "Campaign",
      },
    },
    required: ["mailchimp_access_token", "campaign_id"],
  },
  output_parameters: {
    properties: {
      campaign_type: { type: Schema.types.string, title: "Campaign type" },
      id: { type: Schema.types.string, title: "Campaign ID" },
      status: { type: Schema.types.string, title: "Campaign status" },
      emails_sent: {
        type: Schema.types.string,
        title: "Number of emails sent",
      },
      opens: { type: Schema.types.string, title: "Total number of opens" },
      unique_opens: {
        type: Schema.types.string,
        title: "Number of unique opens",
      },
      open_rate: {
        type: Schema.types.string,
        description:
          "The number of unique opens divided by the total number of successful deliveries.",
        title: "Open rate",
      },
      clicks: { type: Schema.types.string, title: "Total number of clicks" },
      unique_clicks: {
        type: Schema.types.string,
        title: "Number of unique clicks",
      },
      click_rate: {
        type: Schema.types.string,
        description:
          "The number of unique clicks divided by the total number of successful deliveries.",
        title: "Click rate",
      },
    },
    required: [],
  },
});
