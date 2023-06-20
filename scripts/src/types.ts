type BaseFunctionProperty = {
  type: string;
  description?: string;
  title?: string;
  enum?: string[];
};

export type ObjectFunctionProperty = BaseFunctionProperty & {
  type: "object";
  properties: FunctionProperties;
  required?: string[];
  additionalProperties?: boolean;
};

export type ArrayFunctionProperty = BaseFunctionProperty & {
  type: "array";
  items: FunctionProperty;
};

export type FunctionProperty =
  | BaseFunctionProperty
  | ObjectFunctionProperty
  | ArrayFunctionProperty;

export type FunctionProperties = {
  [key: string]: FunctionProperty;
};

export type FunctionParameter = FunctionProperty & {
  name: string;
  is_required?: boolean;
};

export type FunctionRecord = {
  namespace: string;
  id: string;
  callback_id: string;
  title: string;
  description: string;
  type: string;
  input_parameters: FunctionParameter[];
  output_parameters: FunctionParameter[];
  app_id: string;
  date_updated?: number;
  date_created?: number;
  date_deleted?: number;
};

export type FunctionsPayload = {
  ok: boolean;
  functions: FunctionRecord[];
};
