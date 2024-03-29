/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import InsertTask from "./insert_task.ts";

Deno.test("InsertTask can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_InsertTask_slack_function",
    title: "Test InsertTask",
    description: "This is a generated test to test InsertTask",
  });
  testWorkflow.addStep(InsertTask, {
    tasklist_id: "test",
    title: "test",
    notes: "test",
    google_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05RZA1NU7L#/functions/insert_task");
  assertEquals(actual.inputs, {
    tasklist_id: "test",
    title: "test",
    notes: "test",
    google_access_token: "test",
  });
});

Deno.test("All outputs of Slack function InsertTask should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_InsertTask_slack_function",
    title: "Test InsertTask",
    description: "This is a generated test to test InsertTask",
  });
  const step = testWorkflow.addStep(InsertTask, {
    tasklist_id: "test",
    title: "test",
    notes: "test",
    google_access_token: "test",
  });
  assertExists(step.outputs.title);
  assertExists(step.outputs.task_id);
  assertExists(step.outputs.notes);
  assertExists(step.outputs.status);
});
