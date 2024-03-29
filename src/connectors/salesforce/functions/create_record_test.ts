/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import CreateRecord from "./create_record.ts";

Deno.test("CreateRecord can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateRecord_slack_function",
    title: "Test CreateRecord",
    description: "This is a generated test to test CreateRecord",
  });
  testWorkflow.addStep(CreateRecord, {
    salesforce_object_name: "test",
    salesforce_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A04T99UKKQE#/functions/create_record");
  assertEquals(actual.inputs, {
    salesforce_object_name: "test",
    salesforce_access_token: "test",
  });
});

Deno.test("All outputs of Slack function CreateRecord should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateRecord_slack_function",
    title: "Test CreateRecord",
    description: "This is a generated test to test CreateRecord",
  });
  const step = testWorkflow.addStep(CreateRecord, {
    salesforce_object_name: "test",
    salesforce_access_token: "test",
  });
  assertExists(step.outputs.success);
  assertExists(step.outputs.record_id);
  assertExists(step.outputs.record_url);
});
