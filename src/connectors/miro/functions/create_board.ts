/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05NR1RGCBZ#/functions/create_board",
  title: "Create board",
  input_parameters: {
    properties: {
      name: {
        type: Schema.types.string,
        description: "Enter the board name...",
        title: "Board name",
      },
      description: {
        type: Schema.types.string,
        description: "Enter the description of the board...",
        title: "Description",
      },
      miro_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Miro access token",
        title: "Miro access token",
      },
      team_access: {
        type: Schema.types.string,
        description: "Anyone in the team...",
        title: "Team level access",
        enum: ["private", "view", "comment", "edit"],
      },
    },
    required: ["name", "description", "miro_access_token"],
  },
  output_parameters: {
    properties: {
      board_id: {
        type: Schema.types.string,
        description: "Board ID",
        title: "Board ID",
      },
      link: {
        type: Schema.types.string,
        description: "Board URL",
        title: "Board URL",
      },
    },
    required: [],
  },
});
