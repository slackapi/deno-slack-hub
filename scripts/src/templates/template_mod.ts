import {
  autogeneratedComment,
  getFunctionName,
  renderFunctionImport,
} from "./template_utils.js";
import { FunctionRecord } from "../types.js";

export const SlackFunctionModTemplate = (
  functionRecords: FunctionRecord[],
) => {
  const callbackIds = functionRecords.map((dfi) => dfi.callback_id);
  const typescript: string[] = [];
  typescript.push(autogeneratedComment(true));
  callbackIds.forEach((callbackId) => {
    typescript.push(renderFunctionImport(callbackId));
  });

  typescript.push("");
  typescript.push(
    `const SlackFunctions = {${
      functionRecords.map((dfi) => `${getFunctionName(dfi.callback_id)}`)
        .join(",")
    }} as const;`,
  );
  typescript.push("");
  typescript.push(`export default SlackFunctions;`);

  return typescript.join("\n");
};

export default SlackFunctionModTemplate;
