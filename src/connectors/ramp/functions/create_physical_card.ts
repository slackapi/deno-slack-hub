/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A066PC9JKJ7#/functions/create_physical_card",
  title: "Create new physical card",
  description: "Create an async task to request for new physical card.",
  input_parameters: {
    properties: {
      user_id: {
        type: Schema.types.string,
        description: "Select a user",
        title: "User",
      },
      card_name: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Card name",
      },
      address1: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Street address",
      },
      address2: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Floor/Suite/Office",
      },
      city: {
        type: Schema.types.string,
        description: "Enter text",
        title: "City",
      },
      country: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Country",
      },
      first_name: {
        type: Schema.types.string,
        description: "Enter text",
        title: "First name",
      },
      last_name: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Last name",
      },
      phone: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Phone number",
      },
      postal_code: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Zip code",
      },
      state: {
        type: Schema.types.string,
        description: "Enter text",
        title: "State",
      },
      amount_limit: {
        type: Schema.types.number,
        description: "Enter amount",
        title: "Amount",
      },
      interval: {
        type: Schema.types.string,
        description: "Select an option",
        title: "Frequency",
        enum: [
          "ANNUAL",
          "DAILY",
          "MONTHLY",
          "QUARTERLY",
          "TERTIARY",
          "TOTAL",
          "WEEKLY",
          "YEARLY",
        ],
      },
      ramp_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Ramp Credential to use",
        title: "Ramp access token",
      },
    },
    required: [
      "user_id",
      "card_name",
      "address1",
      "city",
      "country",
      "first_name",
      "last_name",
      "postal_code",
      "state",
      "amount_limit",
      "interval",
      "ramp_access_token",
    ],
  },
  output_parameters: {
    properties: {
      user_id: { type: Schema.types.string, title: "User ID" },
      deferred_task_id: {
        type: Schema.types.string,
        title: "Deferred task ID",
      },
    },
    required: ["user_id", "deferred_task_id"],
  },
});
