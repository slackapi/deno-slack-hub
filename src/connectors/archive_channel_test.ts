/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../workflows/mod.ts";
import { ManifestFunctionSchema } from "../../../manifest/manifest_schema.ts";
import Schema.slack.types from "../schema_types.ts";
import ArchiveChannel from "./archive_channel.ts";

Deno.test("ArchiveChannel generates valid FunctionManifest", () => {assertEquals(ArchiveChannel.definition.callback_id, "slack#/functions/archive_channel");
const expected: ManifestFunctionSchema = {source_file: "",
title: "Archive a channel",
description: "Archive a Slack channel",
input_parameters: {properties: {channel_id: {type: SlackTypes.channel_id,
description: "Search all channels",
title: "Select a channel"}},
required: ["channel_id"]},
output_parameters: {properties: {channel_id: {type: SlackTypes.channel_id,
description: "Channel name",
title: "Channel name"}},
required: ["channel_id"]}};
const actual = ArchiveChannel.export();

assertEquals(actual, expected);});

Deno.test("ArchiveChannel can be used as a Slack function in a workflow step", () => {const testWorkflow = DefineWorkflow({callback_id: "test_ArchiveChannel_slack_function", 
title: "Test ArchiveChannel", 
description: "This is a generated test to test ArchiveChannel"});
testWorkflow.addStep(ArchiveChannel, {channel_id: "test"});
const actual = testWorkflow.steps[0].export();

assertEquals(actual.function_id, "slack#/functions/archive_channel");
assertEquals(actual.inputs, {channel_id: "test"});});

Deno.test("All outputs of Slack function ArchiveChannel should exist", () => {const testWorkflow = DefineWorkflow({callback_id: "test_ArchiveChannel_slack_function", 
title: "Test ArchiveChannel", 
description: "This is a generated test to test ArchiveChannel"});
const step = testWorkflow.addStep(ArchiveChannel, {channel_id: "test"});
assertExists(step.outputs.channel_id);});