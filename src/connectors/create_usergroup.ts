/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineFunction } from "../../../functions/mod.ts";
import Schema.types from "../../schema_types.ts";
import Schema.slack.types from "../schema_types.ts";

export default DefineFunction({callback_id: "slack#/functions/create_usergroup",
source_file: "",
title: "Create a user group",
description: "Create a Slack user group",
input_parameters: {properties: {usergroup_handle: {type: SchemaTypes.string,
description: "Ex: accounts-team",
title: "Handle"},
usergroup_name: {type: SchemaTypes.string,
description: "Ex. Accounts Team",
title: "Display name"}},
required: ["usergroup_handle","usergroup_name"]},
output_parameters: {properties: {usergroup_id: {type: SlackTypes.usergroup_id,
description: "User group",
title: "User group"}},
required: ["usergroup_id"]}});