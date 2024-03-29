/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import CreateIncident from "./create_incident.ts";

Deno.test("CreateIncident can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateIncident_slack_function",
    title: "Test CreateIncident",
    description: "This is a generated test to test CreateIncident",
  });
  testWorkflow.addStep(CreateIncident, {
    title: "test",
    details: "test",
    pagerduty_access_token: "test",
    service_id: "test",
    escalation_policy: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A04RSGH23L7#/functions/create_incident");
  assertEquals(actual.inputs, {
    title: "test",
    details: "test",
    pagerduty_access_token: "test",
    service_id: "test",
    escalation_policy: "test",
  });
});

Deno.test("All outputs of Slack function CreateIncident should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateIncident_slack_function",
    title: "Test CreateIncident",
    description: "This is a generated test to test CreateIncident",
  });
  const step = testWorkflow.addStep(CreateIncident, {
    title: "test",
    details: "test",
    pagerduty_access_token: "test",
    service_id: "test",
    escalation_policy: "test",
  });
  assertExists(step.outputs.incident_id);
  assertExists(step.outputs.incident_url);
  assertExists(step.outputs.incident_title);
  assertExists(step.outputs.incident_details);
  assertExists(step.outputs.escalation_policy);
  assertExists(step.outputs.service);
  assertExists(step.outputs.team);
});
