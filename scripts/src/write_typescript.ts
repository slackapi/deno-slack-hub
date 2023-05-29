import FunctionTemplate from "./templates/function.ts";
import TestFunctionTemplate from "./templates/test.ts";
import ConnectorModTemplate, {
  ConnectorsModTemplate,
} from "./templates/mod.ts";
import {
  getFunctionRecords,
  greenText,
  groupSlackFunctions,
  redText,
  writeTextFileInDir,
} from "./utils.ts";
import { FunctionRecord } from "./types.ts";
import { parse } from "./deps.ts";

const flags = parse(Deno.args, {
  string: ["connectors_path"],
  default: {
    "connectors_path": `./src/connectors`,
  },
});

const VALID_FILENAME_REGEX = /^[0-9a-zA-Z_\-]+$/;

const slackFunctions: FunctionRecord[] = await getFunctionRecords();

const groupedSlackFunctions: Record<string, FunctionRecord[]> =
  groupSlackFunctions(slackFunctions);

// Sorting alphabetically cause only a monster would generate these in a random order
slackFunctions.sort((a, b) => a.callback_id.localeCompare(b.callback_id));

await Promise.all(
  Object.entries(groupedSlackFunctions).map(
    async ([namespace, functionRecords]) => {
      const connectorPath = `${flags.connectors_path}/${namespace}`;
      await Deno.mkdir(connectorPath, { recursive: true });

      for (const functionRecord of functionRecords) {
        console.log(
          `Generating code & tests for ${namespace} connector: ${
            greenText(functionRecord.callback_id)
          }`,
        );
        if (!VALID_FILENAME_REGEX.test(functionRecord.callback_id)) {
          console.log(
            `${redText("FAILURE:")} Invalid characters in callback_id: ${
              redText(functionRecord.callback_id)
            }`,
          );
          return;
        }

        const templateString = FunctionTemplate(functionRecord, {
          depth: 3,
        });
        const templateTestString = TestFunctionTemplate(functionRecord, {
          depth: 3,
        });

        await writeTextFileInDir(templateString, {
          dir: `${connectorPath}/functions`,
          filename: `${functionRecord.callback_id}.ts`,
        });
        await writeTextFileInDir(templateTestString, {
          dir: `${connectorPath}/functions`,
          filename: `${functionRecord.callback_id}_test.ts`,
        });
      }
      const modString = ConnectorModTemplate(namespace, functionRecords);

      await Deno.writeTextFile(`${connectorPath}/mod.ts`, modString);
    },
  ),
);

console.log(
  `Generated ${slackFunctions.length} Connectors with their unit tests`,
);

const modString = ConnectorsModTemplate(Object.keys(groupedSlackFunctions));

await Deno.writeTextFile(`${flags.connectors_path}/mod.ts`, modString);
console.log("Updated functions module export");
