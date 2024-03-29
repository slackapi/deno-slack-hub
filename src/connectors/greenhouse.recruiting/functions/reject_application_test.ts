/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import RejectApplication from "./reject_application.ts";

Deno.test("RejectApplication can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_RejectApplication_slack_function",
    title: "Test RejectApplication",
    description: "This is a generated test to test RejectApplication",
  });
  testWorkflow.addStep(RejectApplication, {
    candidate_id: "test",
    application_id: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05QS03T4MB#/functions/reject_application");
  assertEquals(actual.inputs, { candidate_id: "test", application_id: "test" });
});

Deno.test("All outputs of Slack function RejectApplication should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_RejectApplication_slack_function",
    title: "Test RejectApplication",
    description: "This is a generated test to test RejectApplication",
  });
  const step = testWorkflow.addStep(RejectApplication, {
    candidate_id: "test",
    application_id: "test",
  });
  assertExists(step.outputs.id);
  assertExists(step.outputs.status);
  assertExists(step.outputs.candidate_id);
});
