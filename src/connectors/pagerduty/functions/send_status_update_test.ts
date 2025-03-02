/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import SendStatusUpdate from "./send_status_update.ts";

Deno.test("SendStatusUpdate can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_SendStatusUpdate_slack_function",
    title: "Test SendStatusUpdate",
    description: "This is a generated test to test SendStatusUpdate",
  });
  testWorkflow.addStep(SendStatusUpdate, {
    incident_id: "test",
    message: "test",
    pagerduty_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A04RSGH23L7#/functions/send_status_update");
  assertEquals(actual.inputs, {
    incident_id: "test",
    message: "test",
    pagerduty_access_token: "test",
  });
});

Deno.test("All outputs of Slack function SendStatusUpdate should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_SendStatusUpdate_slack_function",
    title: "Test SendStatusUpdate",
    description: "This is a generated test to test SendStatusUpdate",
  });
  const step = testWorkflow.addStep(SendStatusUpdate, {
    incident_id: "test",
    message: "test",
    pagerduty_access_token: "test",
  });
  assertExists(step.outputs.id);
  assertExists(step.outputs.sender);
  assertExists(step.outputs.message);
  assertExists(step.outputs.subject);
  assertExists(step.outputs.html_message);
  assertExists(step.outputs.created_at);
});
