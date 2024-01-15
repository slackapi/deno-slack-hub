/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import UpdateFeatureFlagState from "./update_feature_flag_state.ts";

Deno.test("UpdateFeatureFlagState can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateFeatureFlagState_slack_function",
    title: "Test UpdateFeatureFlagState",
    description: "This is a generated test to test UpdateFeatureFlagState",
  });
  testWorkflow.addStep(UpdateFeatureFlagState, {
    project_key: "test",
    feature_flag_key: "test",
    environment_key: "test",
    feature_flag_state: "test",
    launchdarkly_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(
    actual.function_id,
    "A05RF94AFB3#/functions/update_feature_flag_state",
  );
  assertEquals(actual.inputs, {
    project_key: "test",
    feature_flag_key: "test",
    environment_key: "test",
    feature_flag_state: "test",
    launchdarkly_access_token: "test",
  });
});

Deno.test("All outputs of Slack function UpdateFeatureFlagState should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_UpdateFeatureFlagState_slack_function",
    title: "Test UpdateFeatureFlagState",
    description: "This is a generated test to test UpdateFeatureFlagState",
  });
  const step = testWorkflow.addStep(UpdateFeatureFlagState, {
    project_key: "test",
    feature_flag_key: "test",
    environment_key: "test",
    feature_flag_state: "test",
    launchdarkly_access_token: "test",
  });
  assertExists(step.outputs.name);
  assertExists(step.outputs.description);
  assertExists(step.outputs.key);
  assertExists(step.outputs.environment_key);
  assertExists(step.outputs.comment);
  assertExists(step.outputs.feature_flag_state);
});