/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../workflows/mod.ts";
import { ManifestFunctionSchema } from "../../../manifest/manifest_schema.ts";
import Schema.types from "../../schema_types.ts";
import Schema.slack.types from "../schema_types.ts";
import AddUserToUsergroup from "./add_user_to_usergroup.ts";

Deno.test("AddUserToUsergroup generates valid FunctionManifest", () => {assertEquals(AddUserToUsergroup.definition.callback_id, "slack#/functions/add_user_to_usergroup");
const expected: ManifestFunctionSchema = {source_file: "",
title: "Add to user group",
description: "Add someone to a user group.",
input_parameters: {properties: {usergroup_id: {type: SlackTypes.usergroup_id,
description: "Search all user groups",
title: "Select a user group"},
user_ids: {type: SchemaTypes.array,
description: "Search all people",
title: "Select member(s)",
items: {type: SlackTypes.user_id}}},
required: ["usergroup_id","user_ids"]},
output_parameters: {properties: {usergroup_id: {type: SlackTypes.usergroup_id,
description: "User group",
title: "User group"}},
required: ["usergroup_id"]}};
const actual = AddUserToUsergroup.export();

assertEquals(actual, expected);});

Deno.test("AddUserToUsergroup can be used as a Slack function in a workflow step", () => {const testWorkflow = DefineWorkflow({callback_id: "test_AddUserToUsergroup_slack_function", 
title: "Test AddUserToUsergroup", 
description: "This is a generated test to test AddUserToUsergroup"});
testWorkflow.addStep(AddUserToUsergroup, {usergroup_id: "test",
user_ids: "test"});
const actual = testWorkflow.steps[0].export();

assertEquals(actual.function_id, "slack#/functions/add_user_to_usergroup");
assertEquals(actual.inputs, {usergroup_id: "test",
user_ids: "test"});});

Deno.test("All outputs of Slack function AddUserToUsergroup should exist", () => {const testWorkflow = DefineWorkflow({callback_id: "test_AddUserToUsergroup_slack_function", 
title: "Test AddUserToUsergroup", 
description: "This is a generated test to test AddUserToUsergroup"});
const step = testWorkflow.addStep(AddUserToUsergroup, {usergroup_id: "test",
user_ids: "test"});
assertExists(step.outputs.usergroup_id);});