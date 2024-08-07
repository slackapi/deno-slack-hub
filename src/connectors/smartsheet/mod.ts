/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import AddRow from "./functions/add_row.ts";
import DeleteRow from "./functions/delete_row.ts";
import SelectRow from "./functions/select_row.ts";
import UpdateRow from "./functions/update_row.ts";

const Smartsheet = {
  functions: {
    /**
     * @see The {@link https://api.slack.com/reference/connectors/smartsheet/add_row AddRow} documentation.
     */
    AddRow,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/smartsheet/delete_row DeleteRow} documentation.
     */
    DeleteRow,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/smartsheet/select_row SelectRow} documentation.
     */
    SelectRow,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/smartsheet/update_row UpdateRow} documentation.
     */
    UpdateRow,
  },
} as const;

export default Smartsheet;
