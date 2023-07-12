import FunctionTemplate from "./templates/function.ts";
import TestFunctionTemplate from "./templates/test.ts";
import ConnectorModTemplate, {
  ConnectorsModTemplate,
} from "./templates/mod.ts";
import {
  fetchCertifiedAppsSchema,
  greenText,
  redText,
  writeTextFileInDir,
} from "./utils.ts";
import { CertifiedApp } from "./types.ts";
import { parse } from "./deps.ts";

const VALID_FILENAME_REGEX = /^[0-9a-zA-Z_\-]+$/;

try {
  const flags = parse(Deno.args, {
    string: ["connectors_path"],
    default: {
      "connectors_path": `./src/connectors`,
    },
  });

  const certifiedApps: CertifiedApp[] = await fetchCertifiedAppsSchema();

  await Promise.all(
    certifiedApps.map(
      async (certifiedApp: CertifiedApp) => {
        const connectorPath =
          `${flags.connectors_path}/${certifiedApp.namespace}`;
        await Deno.mkdir(connectorPath, { recursive: true });

        for (const functionRecord of certifiedApp.functions) {
          console.log(
            `Generating code & tests for ${certifiedApp.namespace} connector: ${
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
        const modString = ConnectorModTemplate(
          certifiedApp.namespace,
          certifiedApp.functions,
        );

        await Deno.writeTextFile(`${connectorPath}/mod.ts`, modString);
      },
    ),
  );

  const modString = ConnectorsModTemplate(
    certifiedApps.map((certifiedApp) => certifiedApp.namespace).sort(),
  );

  await Deno.writeTextFile(`${flags.connectors_path}/mod.ts`, modString);
  console.log("Updated functions module export");
} catch (error) {
  console.error(redText("FATAL"), error);
  Deno.exit(1);
}
