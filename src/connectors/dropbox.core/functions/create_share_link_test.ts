/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import CreateShareLink from "./create_share_link.ts";

Deno.test("CreateShareLink can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateShareLink_slack_function",
    title: "Test CreateShareLink",
    description: "This is a generated test to test CreateShareLink",
  });
  testWorkflow.addStep(CreateShareLink, {
    path: "test",
    access: "test",
    audience: "test",
    dropbox_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05U3EFESFR#/functions/create_share_link");
  assertEquals(actual.inputs, {
    path: "test",
    access: "test",
    audience: "test",
    dropbox_access_token: "test",
  });
});

Deno.test("All outputs of Slack function CreateShareLink should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateShareLink_slack_function",
    title: "Test CreateShareLink",
    description: "This is a generated test to test CreateShareLink",
  });
  const step = testWorkflow.addStep(CreateShareLink, {
    path: "test",
    access: "test",
    audience: "test",
    dropbox_access_token: "test",
  });
  assertExists(step.outputs.id);
  assertExists(step.outputs.name);
  assertExists(step.outputs.path);
  assertExists(step.outputs.share_url);
});
