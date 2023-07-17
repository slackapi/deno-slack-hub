import { Schema } from "../../src/deps.ts";
import {
  ArrayProperty,
  CertifiedApp,
  FunctionRecord,
  ObjectProperty,
  Property,
} from "./types.ts";
import { SlackAPI } from "./deps.ts";

const green = "\x1b[92m";
const yellow = "\x1b[38;5;214m";
const red = "\x1b[91m";
const reset = "\x1b[0m";

export const greenText = (text: string) => green + text + reset;
export const yellowText = (text: string) => yellow + text + reset;
export const redText = (text: string) => red + text + reset;

const VALID_FILENAME_REGEX = /^[0-9a-zA-Z_\-]+$/;

const client = SlackAPI("");

export async function fetchCertifiedApps(): Promise<CertifiedApp[]> {
  const appsCertifiedSchemaList = await client.apiCall(
    "apps.certified.schema.list",
  );

  if (appsCertifiedSchemaList.error) {
    throw Error("Fetch connector apps failed", {
      cause: appsCertifiedSchemaList.error,
    });
  }

  return appsCertifiedSchemaList.apps as CertifiedApp[];
}

export function isObjectProperty(
  property: Property,
): property is ObjectProperty {
  return property.type === Schema.types.object && "properties" in property;
}

export function isArrayProperty(
  property: Property,
): property is ArrayProperty {
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

export function isFunctionRecordValid(functionRecord: FunctionRecord): boolean {
  return VALID_FILENAME_REGEX.test(functionRecord.callback_id);
}
