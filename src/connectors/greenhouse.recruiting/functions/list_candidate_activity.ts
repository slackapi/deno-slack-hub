/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05QS03T4MB#/functions/list_candidate_activity",
  title: "Candidate activity",
  description: "Retrieve a candidate activity feed",
  input_parameters: {
    properties: {
      candidate_id: { type: Schema.types.integer, title: "Candidate email" },
    },
    required: ["candidate_id"],
  },
  output_parameters: {
    properties: {
      notes: {
        type: Schema.types.array,
        title: "Notes",
        items: { type: Schema.types.string },
      },
      activities: {
        type: Schema.types.array,
        title: "Activities",
        items: { type: Schema.types.string },
      },
    },
    required: [],
  },
});
