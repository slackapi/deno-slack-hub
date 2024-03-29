/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import GetFormInsights from "./get_form_insights.ts";

Deno.test("GetFormInsights can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_GetFormInsights_slack_function",
    title: "Test GetFormInsights",
    description: "This is a generated test to test GetFormInsights",
  });
  testWorkflow.addStep(GetFormInsights, {
    form_id: "test",
    typeform_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05T70HT5E1#/functions/get_form_insights");
  assertEquals(actual.inputs, {
    form_id: "test",
    typeform_access_token: "test",
  });
});

Deno.test("All outputs of Slack function GetFormInsights should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_GetFormInsights_slack_function",
    title: "Test GetFormInsights",
    description: "This is a generated test to test GetFormInsights",
  });
  const step = testWorkflow.addStep(GetFormInsights, {
    form_id: "test",
    typeform_access_token: "test",
  });
  assertExists(step.outputs.summary);
  assertExists(step.outputs.views_per_question);
  assertExists(step.outputs.dropoffs_per_question);
});
