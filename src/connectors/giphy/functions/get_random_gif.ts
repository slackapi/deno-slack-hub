/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A04U5QUE5EX#/functions/get_random_gif",
  title: "Get a random GIF",
  description:
    "Returns a completely random GIF or a random GIF related to the word or phrase entered",
  input_parameters: {
    properties: {
      tag: {
        type: Schema.types.string,
        description: "Filter results by a specified tag",
        title: "Tag",
      },
      rating: {
        type: Schema.types.string,
        description: "Filter results by a specified rating",
        title: "Rating",
      },
    },
    required: [],
  },
  output_parameters: {
    properties: {
      web_url: {
        type: Schema.types.string,
        description: "A link to this GIF on giphy.com",
        title: "Web URL",
      },
      gif_url: {
        type: Schema.types.string,
        description:
          "The URL for the original version of this GIF that can be used for unfurling in Slack",
        title: "GIF URL",
      },
      title: {
        type: Schema.types.string,
        description: "The title of this GIF",
        title: "Title",
      },
    },
    required: ["web_url", "gif_url"],
  },
});
