import SlackFunctionTemplate from "./templates/function.ts";
import SlackTestFunctionTemplate from "./templates/test.ts";
import ConnectorModTemplate, {
  ConnectorsModTemplate,
} from "./templates/mod.ts";
import {
  getSlackFunctions,
  greenText,
  groupSlackFunctions,
  redText,
} from "./utils.ts";
import { FunctionRecord } from "./types.ts";
import { parse } from "./deps.ts";

const flags = parse(Deno.args, {
  string: ["CONNECTORS_PATH"],
  default: {
    "CONNECTORS_PATH": `./src/connectors`,
  },
});

const VALID_FILENAME_REGEX = /^[0-9a-zA-Z_\-]+$/;

const slackFunctions: FunctionRecord[] = await getSlackFunctions();

const groupedSlackFunctions: Record<string, FunctionRecord[]> =
  groupSlackFunctions(slackFunctions);

// Sorting alphabetically cause only a monster would generate these in a random order
slackFunctions.sort((a, b) => a.callback_id.localeCompare(b.callback_id));

await Promise.all(
  Object.entries(groupedSlackFunctions).map(
    async ([namespace, functionRecords]) => {
      const connectorPath = `${flags.CONNECTORS_PATH}/${namespace}`;
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

        const filename = `${connectorPath}/${functionRecord.callback_id}.ts`;
        const testFilename =
          `${connectorPath}/${functionRecord.callback_id}_test.ts`;

        const templateString = SlackFunctionTemplate(functionRecord);
        const templateTestString = SlackTestFunctionTemplate(functionRecord);

        await Deno.writeTextFile(filename, templateString);
        await Deno.writeTextFile(testFilename, templateTestString);
      }
      const modString = ConnectorModTemplate(namespace, functionRecords);

      await Deno.writeTextFile(`${connectorPath}//mod.ts`, modString);
    },
  ),
);

console.log(
  `Generated ${slackFunctions.length} Slack functions with their unit tests`,
);

const modString = ConnectorsModTemplate(Object.keys(groupedSlackFunctions));

await Deno.writeTextFile(`${flags.CONNECTORS_PATH}/mod.ts`, modString);
console.log("Updated functions module export");
