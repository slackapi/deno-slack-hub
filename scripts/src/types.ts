type BaseProperty = {
  type: string;
  description?: string;
  title?: string;
  enum?: string[];
};

export type ObjectProperty = BaseProperty & {
  type: "object";
  properties: {
    [key: string]: Property;
  };
  required?: string[];
  additionalProperties?: boolean;
};

export type ArrayProperty = BaseProperty & {
  type: "array";
  items: Property;
};

export type Property =
  | BaseProperty
  | ObjectProperty
  | ArrayProperty;

export type FunctionParameter = Property & {
  name: string;
  is_required?: boolean;
};

export type FunctionRecord = {
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

export type CertifiedApp = {
  id: string;
  name: string;
  namespace: string;
  description: string;
  long_description: string;
  url: string;
  support_url: string;
  functions: FunctionRecord[];
  types: {
    [key: string]: Property;
  };
};
