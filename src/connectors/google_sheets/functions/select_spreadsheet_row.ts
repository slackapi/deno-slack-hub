/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A04MG80N5CY#/functions/select_spreadsheet_row",
  title: "Select a spreadsheet row - Beta",
  description: "This function selects a new from a spreadsheet",
  input_parameters: {
    properties: {
      spreadsheet_id: {
        type: Schema.types.string,
        description: "Select a spreadsheet",
        title: "Spreadsheet",
      },
      sheet_title: {
        type: Schema.types.string,
        description: "Sheet",
        title: "Sheet",
      },
      column_name: {
        type: Schema.types.string,
        description: "Sheet",
        title: "Column Name",
      },
      cell_value: {
        type: Schema.types.string,
        description: "Cell Search Value",
        title: "Cell Search Value",
      },
      google_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Google Credential to use",
        title: "Google Access Token",
      },
    },
    required: [
      "spreadsheet_id",
      "sheet_title",
      "column_name",
      "cell_value",
      "google_access_token",
    ],
  },
  output_parameters: {
    properties: {
      column_values: {
        type: Schema.types.array,
        title: "Column values",
        items: { type: Schema.types.string, description: "Column values" },
      },
      row_index: {
        type: Schema.types.string,
        description: "Row Index",
        title: "Row Index",
      },
    },
    required: ["column_values", "row_index"],
  },
});
