/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import RunFlow from "./run_flow.ts";

Deno.test("RunFlow can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_RunFlow_slack_function",
    title: "Test RunFlow",
    description: "This is a generated test to test RunFlow",
  });
  testWorkflow.addStep(RunFlow, {
    flow_name: "test",
    salesforce_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A04T99UKKQE#/functions/run_flow");
  assertEquals(actual.inputs, {
    flow_name: "test",
    salesforce_access_token: "test",
  });
});

Deno.test("All outputs of Slack function RunFlow should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_RunFlow_slack_function",
    title: "Test RunFlow",
    description: "This is a generated test to test RunFlow",
  });
  const step = testWorkflow.addStep(RunFlow, {
    flow_name: "test",
    salesforce_access_token: "test",
  });
  assertExists(step.outputs.success);
  assertExists(step.outputs.flow_name);
  assertExists(step.outputs.result);
});
