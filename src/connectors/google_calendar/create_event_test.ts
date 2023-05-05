/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../dev_deps.ts";
import { DefineWorkflow } from "../../dev_deps.ts";
import CreateEvent from "./create_event.ts";

Deno.test("CreateEvent can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateEvent_slack_function",
    title: "Test CreateEvent",
    description: "This is a generated test to test CreateEvent",
  });
  testWorkflow.addStep(CreateEvent, {
    start_time: "test",
    end_time: "test",
    attendees: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A050C90PUF5#/functions/create_event");
  assertEquals(actual.inputs, {
    start_time: "test",
    end_time: "test",
    attendees: "test",
  });
});

Deno.test("All outputs of Slack function CreateEvent should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateEvent_slack_function",
    title: "Test CreateEvent",
    description: "This is a generated test to test CreateEvent",
  });
  const step = testWorkflow.addStep(CreateEvent, {
    start_time: "test",
    end_time: "test",
    attendees: "test",
  });
  assertExists(step.outputs.event_link);
});
