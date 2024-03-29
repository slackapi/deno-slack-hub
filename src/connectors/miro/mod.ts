/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import CopyBoard from "./functions/copy_board.ts";
import CreateBoard from "./functions/create_board.ts";

const Miro = {
  functions: {
    /**
     * @see The {@link https://api.slack.com/reference/connectors/miro/copy_board CopyBoard} documentation.
     */
    CopyBoard,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/miro/create_board CreateBoard} documentation.
     */
    CreateBoard,
  },
} as const;

export default Miro;
