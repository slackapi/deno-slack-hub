/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A066PC9JKJ7#/functions/create_spend_request",
  title: "Create spend request",
  input_parameters: {
    properties: {
      display_name: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Display name",
      },
      description: {
        type: Schema.types.string,
        description: "Enter text",
        title: "Description",
      },
      icon: {
        type: Schema.types.string,
        title: "Template icon",
        enum: [
          "AdvertisingIcon",
          "CardIcon",
          "EducationStipendIcon",
          "LunchOrderingIcon",
          "OnboardingIcon",
          "PerDiemCardIcon",
          "SaasSubscriptionIcon",
          "SoftwareTrialIcon",
          "TravelExpensesIcon",
          "WellnessIcon",
        ],
      },
      primary_card_enabled: {
        type: Schema.types.boolean,
        title: "Allow spending with physical card",
      },
      reimbursements_enabled: {
        type: Schema.types.boolean,
        title: "Allow spending through reimbursement",
      },
      issue_physical_card_if_needed: {
        type: Schema.types.boolean,
        title: "Issue physical card if employee doesn’t have one",
      },
      amount_limit: {
        type: Schema.types.number,
        description: "Enter amount",
        title: "Amount",
      },
      interval: {
        type: Schema.types.string,
        description: "Select an interval",
        title: "Interval",
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
      "display_name",
      "description",
      "icon",
      "primary_card_enabled",
      "reimbursements_enabled",
      "amount_limit",
      "interval",
      "ramp_access_token",
    ],
  },
  output_parameters: {
    properties: {
      spend_id: { type: Schema.types.string, title: "Spend ID" },
      spend_program_url: {
        type: Schema.types.string,
        title: "Spend program url",
      },
    },
    required: ["spend_id", "spend_program_url"],
  },
});
