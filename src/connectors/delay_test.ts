/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../workflows/mod.ts";
import { ManifestFunctionSchema } from "../../../manifest/manifest_schema.ts";
import Schema.types from "../../schema_types.ts";
import Delay from "./delay.ts";

Deno.test("Delay generates valid FunctionManifest", () => {assertEquals(Delay.definition.callback_id, "slack#/functions/delay");
const expected: ManifestFunctionSchema = {source_file: "",
title: "Delay",
description: "Pause the workflow for a set amount of time",
input_parameters: {properties: {minutes_to_delay: {type: SchemaTypes.integer,
description: "Enter number of minutes",
title: "Delay for this many minutes"}},
required: ["minutes_to_delay"]},
output_parameters: {properties: {},
required: []}};
const actual = Delay.export();

assertEquals(actual, expected);});

Deno.test("Delay can be used as a Slack function in a workflow step", () => {const testWorkflow = DefineWorkflow({callback_id: "test_Delay_slack_function", 
title: "Test Delay", 
description: "This is a generated test to test Delay"});
testWorkflow.addStep(Delay, {minutes_to_delay: "test"});
const actual = testWorkflow.steps[0].export();

assertEquals(actual.function_id, "slack#/functions/delay");
assertEquals(actual.inputs, {minutes_to_delay: "test"});});