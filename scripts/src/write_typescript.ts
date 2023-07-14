import {
  ConnectorModTemplate,
  ConnectorsModTemplate,
  FunctionTemplate,
  TestFunctionTemplate,
} from "./templates/mod.ts";
import {
  fetchCertifiedApps,
  greenText,
  isFunctionRecordValid,
  redText,
  writeTextFileInDir,
} from "./utils.ts";
import { CertifiedApp, FunctionRecord } from "./types.ts";
import { parse } from "./deps.ts";

try {
  const flags = parse(Deno.args, {
    string: ["connectors_path"],
    default: {
      "connectors_path": `./src/connectors`,
    },
  });

  const certifiedApps: CertifiedApp[] = await fetchCertifiedApps();

  for (const certifiedApp of certifiedApps) {
    const connectorPath = `${flags.connectors_path}/${certifiedApp.namespace}`;

    console.log(
      `Generating typescript files for functions defined by: ${
        greenText(certifiedApp.namespace)
      }`,
    );

    const validFunctions = await certifiedApp.functions.reduce<
      Promise<FunctionRecord[]>
    >(
      async (validFunctionRecords, functionRecord) => {
        if (!isFunctionRecordValid(functionRecord)) {
          console.warn(
            `${
              redText("FAILURE:")
            } Invalid characters in callback_id: ${functionRecord.callback_id}`,
          );
          return validFunctionRecords;
        }

        await writeFunctionFile(
          functionRecord,
          `${connectorPath}/functions`,
        );
        await writeTestFile(
          functionRecord,
          `${connectorPath}/functions`,
        );

        (await validFunctionRecords).push(functionRecord);
        return validFunctionRecords;
      },
      Promise.resolve([]),
    );

    await writeModFile(certifiedApp.namespace, validFunctions, connectorPath);
  }

  await writePackageModFile(certifiedApps, flags.connectors_path);
} catch (error) {
  console.error(redText("FATAL"), error);
  Deno.exit(1);
}

async function writeFunctionFile(
  functionRecord: FunctionRecord,
  directory: string,
) {
  console.log(
    `Writing function code for: ${greenText(functionRecord.callback_id)}`,
  );

  const templateString = FunctionTemplate(functionRecord, {
    depth: 3,
  });

  await writeTextFileInDir(templateString, {
    dir: directory,
    filename: `${functionRecord.callback_id}.ts`,
  });
}

async function writeTestFile(
  functionRecord: FunctionRecord,
  directory: string,
) {
  console.log(
    `Writing test code for: ${greenText(functionRecord.callback_id)}`,
  );

  const templateTestString = TestFunctionTemplate(functionRecord, {
    depth: 3,
  });

  await writeTextFileInDir(templateTestString, {
    dir: directory,
    filename: `${functionRecord.callback_id}_test.ts`,
  });
}

async function writeModFile(
  namespace: string,
  functionRecords: FunctionRecord[],
  directory: string,
) {
  const filename = "mod.ts";
  console.log(
    `Writing ${filename} code for: ${greenText(namespace)}`,
  );

  const modString = ConnectorModTemplate(
    namespace,
    functionRecords,
  );

  await writeTextFileInDir(modString, {
    dir: directory,
    filename,
  });
}

async function writePackageModFile(
  certifiedApps: CertifiedApp[],
  directory: string,
) {
  const filename = "mod.ts";
  console.log(
    `Writing package level ${filename} code!`,
  );

  const modString = ConnectorsModTemplate(certifiedApps);

  await writeTextFileInDir(modString, {
    dir: directory,
    filename,
  });
}
