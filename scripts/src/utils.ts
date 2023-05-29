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

const APP_ID_NAMESPACE_TABLE: Record<string, string> = {
  "A04T99UKKQE": "salesforce",
  "A050HLW5TFV": "gitlab",
  "A04RSGH23L7": "pagerduty",
  "A0516LWJMFE": "github_enterprise_server",
  "A04MG80N5CY": "google_sheets",
  "A050MUYMYFP": "calendly",
  "A050QFW22F5": "github",
  "A04S9208DRQ": "zoom",
  "A04T6GE3LEB": "jira_cloud",
  "A04U5QUE5EX": "giphy",
  "A050C90PUF5": "google_calendar",
  "A050R5T1K6X": "webex",
};

export function groupSlackFunctions(
  functionRecords: FunctionRecord[],
): Record<string, FunctionRecord[]> {
  const functionRecordGroups: Record<string, FunctionRecord[]> = {};
  for (const functionRecord of functionRecords) {
    const key = APP_ID_NAMESPACE_TABLE[functionRecord.app_id];
    if (functionRecordGroups[key]) {
      functionRecordGroups[key].push(functionRecord);
    } else {
      functionRecordGroups[key] = [functionRecord];
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
  return "properties" in property;
}

export function isArrayFunctionProperty(
  property: FunctionProperty,
): property is ArrayFunctionProperty {
  return "items" in property;
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
