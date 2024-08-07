/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import AddRow from "./add_row.ts";

Deno.test("AddRow can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_AddRow_slack_function",
    title: "Test AddRow",
    description: "This is a generated test to test AddRow",
  });
  testWorkflow.addStep(AddRow, {
    sheet: "test",
    columns: "test",
    smartsheet_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05SEF35LQY#/functions/add_row");
  assertEquals(actual.inputs, {
    sheet: "test",
    columns: "test",
    smartsheet_access_token: "test",
  });
});

Deno.test("All outputs of Slack function AddRow should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_AddRow_slack_function",
    title: "Test AddRow",
    description: "This is a generated test to test AddRow",
  });
  const step = testWorkflow.addStep(AddRow, {
    sheet: "test",
    columns: "test",
    smartsheet_access_token: "test",
  });
  assertExists(step.outputs.smartsheet_url);
  assertExists(step.outputs.sheet_id);
  assertExists(step.outputs.row_id);
});
