/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import CreatePanel from "./create_panel.ts";

Deno.test("CreatePanel can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreatePanel_slack_function",
    title: "Test CreatePanel",
    description: "This is a generated test to test CreatePanel",
  });
  testWorkflow.addStep(CreatePanel, {
    opportunity_id: "test",
    perform_as: "test",
    timezone: "test",
    subject: "test",
    duration: "test",
    date: "test",
    interviewers: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A063ZSXC719#/functions/create_panel");
  assertEquals(actual.inputs, {
    opportunity_id: "test",
    perform_as: "test",
    timezone: "test",
    subject: "test",
    duration: "test",
    date: "test",
    interviewers: "test",
  });
});

Deno.test("All outputs of Slack function CreatePanel should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreatePanel_slack_function",
    title: "Test CreatePanel",
    description: "This is a generated test to test CreatePanel",
  });
  const step = testWorkflow.addStep(CreatePanel, {
    opportunity_id: "test",
    perform_as: "test",
    timezone: "test",
    subject: "test",
    duration: "test",
    date: "test",
    interviewers: "test",
  });
  assertExists(step.outputs.panel_id);
  assertExists(step.outputs.panel_url);
});
