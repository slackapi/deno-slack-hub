/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import AddToEvent from "./add_to_event.ts";

Deno.test("AddToEvent can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_AddToEvent_slack_function",
    title: "Test AddToEvent",
    description: "This is a generated test to test AddToEvent",
  });
  testWorkflow.addStep(AddToEvent, {
    calendar_id: "test",
    event_id: "test",
    attendee_email: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A050C90PUF5#/functions/add_to_event");
  assertEquals(actual.inputs, {
    calendar_id: "test",
    event_id: "test",
    attendee_email: "test",
  });
});

Deno.test("All outputs of Slack function AddToEvent should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_AddToEvent_slack_function",
    title: "Test AddToEvent",
    description: "This is a generated test to test AddToEvent",
  });
  const step = testWorkflow.addStep(AddToEvent, {
    calendar_id: "test",
    event_id: "test",
    attendee_email: "test",
  });
  assertExists(step.outputs.event_summary);
  assertExists(step.outputs.event_url);
});