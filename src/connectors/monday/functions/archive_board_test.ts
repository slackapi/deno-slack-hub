/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import ArchiveBoard from "./archive_board.ts";

Deno.test("ArchiveBoard can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_ArchiveBoard_slack_function",
    title: "Test ArchiveBoard",
    description: "This is a generated test to test ArchiveBoard",
  });
  testWorkflow.addStep(ArchiveBoard, {
    monday_access_token: "test",
    board_id: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05U2T0F8PP#/functions/archive_board");
  assertEquals(actual.inputs, {
    monday_access_token: "test",
    board_id: "test",
  });
});

Deno.test("All outputs of Slack function ArchiveBoard should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_ArchiveBoard_slack_function",
    title: "Test ArchiveBoard",
    description: "This is a generated test to test ArchiveBoard",
  });
  const step = testWorkflow.addStep(ArchiveBoard, {
    monday_access_token: "test",
    board_id: "test",
  });
  assertExists(step.outputs.board_id);
  assertExists(step.outputs.board_name);
});