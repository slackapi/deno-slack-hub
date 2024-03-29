/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import CreateProject from "./create_project.ts";

Deno.test("CreateProject can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateProject_slack_function",
    title: "Test CreateProject",
    description: "This is a generated test to test CreateProject",
  });
  testWorkflow.addStep(CreateProject, {
    domain: "test",
    name: "test",
    basecamp_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05UU55CFFA#/functions/create_project");
  assertEquals(actual.inputs, {
    domain: "test",
    name: "test",
    basecamp_access_token: "test",
  });
});

Deno.test("All outputs of Slack function CreateProject should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateProject_slack_function",
    title: "Test CreateProject",
    description: "This is a generated test to test CreateProject",
  });
  const step = testWorkflow.addStep(CreateProject, {
    domain: "test",
    name: "test",
    basecamp_access_token: "test",
  });
  assertExists(step.outputs.id);
  assertExists(step.outputs.name);
  assertExists(step.outputs.url);
});
