import { Schema } from "../../src/deps.ts";
import {
  ArrayFunctionProperty,
  FunctionProperty,
  FunctionRecord,
  FunctionsPayload,
  ObjectFunctionProperty,
} from "./types.ts";

const FUNCTIONS_JSON_PATH = "functions.json";

const green = "\x1b[92m";
const yellow = "\x1b[38;5;214m";
const red = "\x1b[91m";
const reset = "\x1b[0m";

export const greenText = (text: string) => green + text + reset;
export const yellowText = (text: string) => yellow + text + reset;
export const redText = (text: string) => red + text + reset;

type ConnectorInfoType = { namespace: string; functions: string[] };
const APP_ID_NAMESPACE_TABLE: Record<string, ConnectorInfoType> = {
  "A04T99UKKQE": {
    namespace: "salesforce",
    functions: ["create_record", "update_record", "run_flow"],
  },
  "A050HLW5TFV": { namespace: "gitlab", functions: ["create_issue"] },
  "A04RSGH23L7": {
    namespace: "pagerduty",
    functions: [
      "create_incident",
      "escalate_incident",
      "add_a_note",
      "resolve_incident",
    ],
  },
  "A04MG80N5CY": {
    namespace: "google.sheets",
    functions: ["add_spreadsheet_row"],
  },
  "A050MUYMYFP": { namespace: "calendly", functions: ["get_meeting_link"] },
  "A050QFW22F5": { namespace: "github.cloud", functions: ["create_issue"] },
  "A04S9208DRQ": { namespace: "zoom", functions: ["create_meeting"] },
  "A04T6GE3LEB": {
    namespace: "jira.cloud",
    functions: ["create_issue", "edit_issue"],
  },
  "A04U5QUE5EX": {
    namespace: "giphy",
    functions: ["get_random_gif", "get_translated_gif"],
  },
  "A050C90PUF5": { namespace: "google.calendar", functions: [] },
  "A050R5T1K6X": { namespace: "webex", functions: [] },
};

export function groupSlackFunctions(
  functionRecords: FunctionRecord[],
): Record<string, FunctionRecord[]> {
  const functionRecordGroups: Record<string, FunctionRecord[]> = {};
  for (const functionRecord of functionRecords) {
    const connectorInfo = APP_ID_NAMESPACE_TABLE[functionRecord.app_id];
    if (
      !connectorInfo ||
      !connectorInfo.functions.includes(functionRecord.callback_id)
    ) {
      continue;
    }
    if (functionRecordGroups[connectorInfo.namespace]) {
      functionRecordGroups[connectorInfo.namespace].push(functionRecord);
    } else {
      functionRecord.namespace = connectorInfo.namespace;
      functionRecordGroups[connectorInfo.namespace] = [functionRecord];
    }
  }

  return functionRecordGroups;
}

export async function getFunctionRecords(
  functionsPayloadPath: string = FUNCTIONS_JSON_PATH,
): Promise<FunctionRecord[]> {
  const functionsPayload: FunctionsPayload = await Deno.readTextFile(
    functionsPayloadPath,
  ).then(JSON.parse);

  return functionsPayload.functions.filter((fn) => fn.type == "app");
}

export function isObjectFunctionProperty(
  property: FunctionProperty,
): property is ObjectFunctionProperty {
  return property.type === Schema.types.object && "properties" in property;
}

export function isArrayFunctionProperty(
  property: FunctionProperty,
): property is ArrayFunctionProperty {
  return property.type === Schema.types.array && "items" in property;
}

export async function writeTextFileInDir(
  data: string,
  options: {
    dir: string;
    filename: string;
  },
) {
  await Deno.mkdir(options.dir, { recursive: true });
  await Deno.writeTextFile(`${options.dir}/${options.filename}`, data);
}
