/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../dev_deps.ts";
import { DefineWorkflow } from "../../dev_deps.ts";
import EditIssue from "./edit_issue.ts";

Deno.test("EditIssue can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_EditIssue_slack_function",
    title: "Test EditIssue",
    description: "This is a generated test to test EditIssue",
  });
  testWorkflow.addStep(EditIssue, { jira_domain: "test", issue_id: "test" });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A04T6GE3LEB#/functions/edit_issue");
  assertEquals(actual.inputs, { jira_domain: "test", issue_id: "test" });
});

Deno.test("All outputs of Slack function EditIssue should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_EditIssue_slack_function",
    title: "Test EditIssue",
    description: "This is a generated test to test EditIssue",
  });
  const step = testWorkflow.addStep(EditIssue, {
    jira_domain: "test",
    issue_id: "test",
  });
  assertExists(step.outputs.status);
});
