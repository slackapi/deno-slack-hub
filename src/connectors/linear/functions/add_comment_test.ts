/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import AddComment from "./add_comment.ts";

Deno.test("AddComment can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_AddComment_slack_function",
    title: "Test AddComment",
    description: "This is a generated test to test AddComment",
  });
  testWorkflow.addStep(AddComment, {
    issue_update_id: "test",
    comment: "test",
    linear_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A05ULH1PNMA#/functions/add_comment");
  assertEquals(actual.inputs, {
    issue_update_id: "test",
    comment: "test",
    linear_access_token: "test",
  });
});

Deno.test("All outputs of Slack function AddComment should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_AddComment_slack_function",
    title: "Test AddComment",
    description: "This is a generated test to test AddComment",
  });
  const step = testWorkflow.addStep(AddComment, {
    issue_update_id: "test",
    comment: "test",
    linear_access_token: "test",
  });
  assertExists(step.outputs.issue_id);
  assertExists(step.outputs.comment_id);
  assertExists(step.outputs.title);
  assertExists(step.outputs.body);
  assertExists(step.outputs.comment_url);
});
