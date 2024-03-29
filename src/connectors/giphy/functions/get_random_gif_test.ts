/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import GetRandomGif from "./get_random_gif.ts";

Deno.test("GetRandomGif can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_GetRandomGif_slack_function",
    title: "Test GetRandomGif",
    description: "This is a generated test to test GetRandomGif",
  });
  testWorkflow.addStep(GetRandomGif, { rating: "test" });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A04U5QUE5EX#/functions/get_random_gif");
  assertEquals(actual.inputs, { rating: "test" });
});

Deno.test("All outputs of Slack function GetRandomGif should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_GetRandomGif_slack_function",
    title: "Test GetRandomGif",
    description: "This is a generated test to test GetRandomGif",
  });
  const step = testWorkflow.addStep(GetRandomGif, { rating: "test" });
  assertExists(step.outputs.gif_title_url);
  assertExists(step.outputs.tag);
});
