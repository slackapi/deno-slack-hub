import {
  FunctionDefinitionArgs,
  ManifestFunctionSchema,
  ParameterSetDefinition,
  PossibleParameterKeys,
  //   SlackFunctionDefinition,
  SlackManifest,
} from "./deps.ts";

// export class ConnectorDefinition<
//   InputParameters extends ParameterSetDefinition,
//   OutputParameters extends ParameterSetDefinition,
//   RequiredInput extends PossibleParameterKeys<InputParameters>,
//   RequiredOutput extends PossibleParameterKeys<OutputParameters>,
// > extends SlackFunctionDefinition<
//   InputParameters,
//   OutputParameters,
//   RequiredInput,
//   RequiredOutput
// > {
//   constructor(
//     public definition: FunctionDefinitionArgs<
//       InputParameters,
//       OutputParameters,
//       RequiredInput,
//       RequiredOutput
//     >,
//   ) {
//     super(definition);
//   }

//   export(): ManifestConnectorSchema {
//     return {
//       title: this.definition.title,
//       description: this.definition.description,
//       type: "API",
//       source_file: this.definition.source_file,
//       input_parameters: this.definition.input_parameters ??
//         { properties: {}, required: [] },
//       output_parameters: this.definition.output_parameters ??
//         { properties: {}, required: [] },
//     };
//   }
// }

export class ConnectorDefinition<
  InputParameters extends ParameterSetDefinition,
  OutputParameters extends ParameterSetDefinition,
  RequiredInput extends PossibleParameterKeys<InputParameters>,
  RequiredOutput extends PossibleParameterKeys<OutputParameters>,
> {
  public id: string;

  constructor(
    public definition: FunctionDefinitionArgs<
      InputParameters,
      OutputParameters,
      RequiredInput,
      RequiredOutput
    >,
  ) {
    this.id = definition.callback_id;
    this.definition = definition;
  }

  registerParameterTypes(manifest: SlackManifest) {
    const { input_parameters: inputParams, output_parameters: outputParams } =
      this.definition;
    manifest.registerTypes(inputParams?.properties ?? {});
    manifest.registerTypes(outputParams?.properties ?? {});
  }

  export(): ManifestFunctionSchema {
    return {
      title: this.definition.title,
      description: this.definition.description,
      source_file: "",
      type: "API",
      input_parameters: this.definition.input_parameters ??
        { properties: {}, required: [] },
      output_parameters: this.definition.output_parameters ??
        { properties: {}, required: [] },
    };
  }
}
