/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05SEF35LQY#/functions/add_row",
  title: "Add a row to a Smartsheet",
  input_parameters: {
    properties: {
      sheet: {
        type: Schema.types.object,
        description: "Select a smartsheet",
        title: "Smartsheet",
      },
      columns: {
        type: Schema.types.object,
        description: "Columns",
        title: "Columns",
      },
      smartsheet_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Which account should we use to fetch Smartsheets?",
        title: "Smartsheet Access Token",
      },
    },
    required: ["sheet", "columns", "smartsheet_access_token"],
  },
  output_parameters: {
    properties: {
      smartsheet_url: {
        type: Schema.types.string,
        description: "Smartsheet URL",
        title: "Smartsheet URL",
      },
      sheet_id: {
        type: Schema.types.string,
        description: "Smartsheet ID",
        title: "Smartsheet ID",
      },
      row_id: { type: Schema.types.string, title: "Row ID" },
    },
    required: ["smartsheet_url", "sheet_id"],
  },
});
