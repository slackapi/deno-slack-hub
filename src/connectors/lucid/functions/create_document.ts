/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A059SAQK6MC#/functions/create_document",
  title: "Create a document",
  description: "Create a Lucid document",
  input_parameters: {
    properties: {
      title: {
        type: Schema.types.string,
        description: "Enter a title...",
        title: "Title",
      },
      product: {
        type: Schema.types.string,
        description: "Valid options are: lucidchart, lucidspark",
        title: "Choose a document type",
        enum: ["lucidchart", "lucidspark"],
      },
      lucid_access_token: {
        type: Schema.slack.types.oauth2,
        description: "Lucid Credential to use",
        title: "Lucid Access Token",
      },
    },
    required: ["title", "product", "lucid_access_token"],
  },
  output_parameters: {
    properties: {
      title: {
        type: Schema.types.string,
        description: "Title of the document",
        title: "Title",
      },
      view_url: {
        type: Schema.types.string,
        description: "View the document using this URL",
        title: "View document URL",
      },
      edit_url: {
        type: Schema.types.string,
        description: "Edit the document using this URL",
        title: "Edit document URL",
      },
      product: {
        type: Schema.types.string,
        description: "Lucid document type",
        title: "Document type",
      },
      document_id: {
        type: Schema.types.string,
        description: "Document ID",
        title: "Document ID",
      },
    },
    required: ["title", "view_url", "edit_url", "product", "document_id"],
  },
});
