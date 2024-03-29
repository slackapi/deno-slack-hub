/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import GetTranslatedGif from "./get_translated_gif.ts";

Deno.test("GetTranslatedGif can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_GetTranslatedGif_slack_function",
    title: "Test GetTranslatedGif",
    description: "This is a generated test to test GetTranslatedGif",
  });
  testWorkflow.addStep(GetTranslatedGif, { search_term: "test" });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A04U5QUE5EX#/functions/get_translated_gif");
  assertEquals(actual.inputs, { search_term: "test" });
});

Deno.test("All outputs of Slack function GetTranslatedGif should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_GetTranslatedGif_slack_function",
    title: "Test GetTranslatedGif",
    description: "This is a generated test to test GetTranslatedGif",
  });
  const step = testWorkflow.addStep(GetTranslatedGif, { search_term: "test" });
  assertExists(step.outputs.gif_title_url);
  assertExists(step.outputs.search_term);
});
