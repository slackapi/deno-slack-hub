/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../workflows/mod.ts";
import { ManifestFunctionSchema } from "../../../manifest/manifest_schema.ts";
import Schema.types from "../../schema_types.ts";
import Schema.slack.types from "../schema_types.ts";
import InviteUserToChannel from "./invite_user_to_channel.ts";

Deno.test("InviteUserToChannel generates valid FunctionManifest", () => {assertEquals(InviteUserToChannel.definition.callback_id, "slack#/functions/invite_user_to_channel");
const expected: ManifestFunctionSchema = {source_file: "",
title: "Invite to channel",
description: "Invite someone to a channel. This will only work if this workflow created the channel.",
input_parameters: {properties: {channel_ids: {type: SchemaTypes.array,
description: "Search all channels",
title: "Select channel(s)",
items: {type: SlackTypes.channel_id}},
user_ids: {type: SchemaTypes.array,
description: "Search all people",
title: "Select member(s)",
items: {type: SlackTypes.user_id}}},
required: ["channel_ids","user_ids"]},
output_parameters: {properties: {user_ids: {type: SchemaTypes.array,
description: "Person(s) who were invited",
title: "Person(s) who were invited",
items: {type: SlackTypes.user_id}}},
required: []}};
const actual = InviteUserToChannel.export();

assertEquals(actual, expected);});

Deno.test("InviteUserToChannel can be used as a Slack function in a workflow step", () => {const testWorkflow = DefineWorkflow({callback_id: "test_InviteUserToChannel_slack_function", 
title: "Test InviteUserToChannel", 
description: "This is a generated test to test InviteUserToChannel"});
testWorkflow.addStep(InviteUserToChannel, {channel_ids: "test",
user_ids: "test"});
const actual = testWorkflow.steps[0].export();

assertEquals(actual.function_id, "slack#/functions/invite_user_to_channel");
assertEquals(actual.inputs, {channel_ids: "test",
user_ids: "test"});});

Deno.test("All outputs of Slack function InviteUserToChannel should exist", () => {const testWorkflow = DefineWorkflow({callback_id: "test_InviteUserToChannel_slack_function", 
title: "Test InviteUserToChannel", 
description: "This is a generated test to test InviteUserToChannel"});
const step = testWorkflow.addStep(InviteUserToChannel, {channel_ids: "test",
user_ids: "test"});
assertExists(step.outputs.user_ids);});