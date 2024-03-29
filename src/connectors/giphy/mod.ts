/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import GetRandomGif from "./functions/get_random_gif.ts";
import GetTranslatedGif from "./functions/get_translated_gif.ts";

const Giphy = {
  functions: {
    /**
     * @see The {@link https://api.slack.com/reference/connectors/giphy/get_random_gif GetRandomGif} documentation.
     */
    GetRandomGif,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/giphy/get_translated_gif GetTranslatedGif} documentation.
     */
    GetTranslatedGif,
  },
} as const;

export default Giphy;
