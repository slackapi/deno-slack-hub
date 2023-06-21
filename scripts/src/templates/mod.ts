import {
  autogeneratedComment,
  getConnectorObjectName,
  getFunctionName,
  renderFunctionImport,
  renderModuleImport,
} from "./utils.ts";
import { FunctionRecord } from "../types.ts";

const renderJSdoc = (
  namespace: string,
  callback_id: string,
): string => {
  const typescript: string[] = [];
  typescript.push("/**");
  typescript.push(
    `* @see The {@link https://api.slack.com/reference/connectors/${namespace}/${callback_id} ${
      getFunctionName(callback_id)
    }} documentation.`,
  );
  typescript.push("*/");
  return typescript.join("\n");
};

const renderFunctions = (
  namespace: string,
  functionRecords: FunctionRecord[],
): string => {
  const typescript: string[] = [];
  functionRecords.forEach((functionRecord: FunctionRecord) => {
    typescript.push(
      `${renderJSdoc(namespace, functionRecord.callback_id)}\n${
        getFunctionName(functionRecord.callback_id)
      }`,
    );
  });
  return `{${typescript.join(",\n")}}`;
};

export const ConnectorModTemplate = (
  namespace: string,
  functionRecords: FunctionRecord[],
) => {
  const callbackIds = functionRecords.map((dfi) => dfi.callback_id).sort();
  const objectName = getConnectorObjectName(namespace);
  const typescript: string[] = [];
  typescript.push(autogeneratedComment(false));
  callbackIds.forEach((callbackId) => {
    typescript.push(renderFunctionImport(callbackId, "./functions/"));
  });

  typescript.push("");
  typescript.push(
    `const ${objectName} = { functions: ${
      renderFunctions(namespace, functionRecords)
    }} as const;`,
  );
  typescript.push("");
  typescript.push(`export default ${objectName};`);

  return typescript.join("\n");
};

export const ConnectorsModTemplate = (
  namespaces: string[],
) => {
  const typescript: string[] = [];
  typescript.push(autogeneratedComment(true));
  namespaces.forEach((namespace) => {
    typescript.push(renderModuleImport(namespace));
  });

  typescript.push("");
  typescript.push(
    `const Connectors = {${
      namespaces.map((namespace) => `${getConnectorObjectName(namespace)}`)
        .join(",")
    }} as const;`,
  );
  typescript.push("");
  typescript.push(`export default Connectors;`);

  return typescript.join("\n");
};

export default ConnectorModTemplate;
