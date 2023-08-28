/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import SelectSpreadsheetRow from "./select_spreadsheet_row.ts";

Deno.test("SelectSpreadsheetRow can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_SelectSpreadsheetRow_slack_function",
    title: "Test SelectSpreadsheetRow",
    description: "This is a generated test to test SelectSpreadsheetRow",
  });
  testWorkflow.addStep(SelectSpreadsheetRow, {
    spreadsheet_id: "test",
    sheet_title: "test",
    column_name: "test",
    cell_value: "test",
    google_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(
    actual.function_id,
    "A04MG80N5CY#/functions/select_spreadsheet_row",
  );
  assertEquals(actual.inputs, {
    spreadsheet_id: "test",
    sheet_title: "test",
    column_name: "test",
    cell_value: "test",
    google_access_token: "test",
  });
});

Deno.test("All outputs of Slack function SelectSpreadsheetRow should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_SelectSpreadsheetRow_slack_function",
    title: "Test SelectSpreadsheetRow",
    description: "This is a generated test to test SelectSpreadsheetRow",
  });
  const step = testWorkflow.addStep(SelectSpreadsheetRow, {
    spreadsheet_id: "test",
    sheet_title: "test",
    column_name: "test",
    cell_value: "test",
    google_access_token: "test",
  });
  assertExists(step.outputs.column_values);
  assertExists(step.outputs.row_index);
});
