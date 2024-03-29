/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A04U5QUE5EX#/functions/get_translated_gif",
  title: "Search for a GIF",
  description: "Search for a Giphy GIF",
  input_parameters: {
    properties: {
      search_term: {
        type: Schema.types.string,
        description: "Enter search terms...",
        title: "Giphy search terms",
      },
      weirdness: {
        type: Schema.types.string,
        description: "From 1 (not very weird) to 10 (very weird)",
        title: "Weirdness",
        enum: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
    },
    required: ["search_term"],
  },
  output_parameters: {
    properties: {
      gif_title_url: {
        type: Schema.types.string,
        description: "The title and URL for the GIF",
        title: "Giphy GIF",
      },
      search_term: {
        type: Schema.types.string,
        description: "The search term used to find the GIF",
        title: "Search terms",
      },
    },
    required: ["gif_title_url", "search_term"],
  },
});
