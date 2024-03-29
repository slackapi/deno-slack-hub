/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05U3EFESFR#/functions/move_document",
  title: "Move a document",
  input_parameters: {
    properties: {
      document_type: {
        type: Schema.types.string,
        description: "Select a document type",
        title: "Document type",
        enum: [
          "folder",
          "paper",
          "spreadsheet",
          "pdf",
          "document",
          "others",
          "audio",
          "video",
        ],
      },
      from_path: {
        type: Schema.types.string,
        description: "Select source",
        title: "Source",
      },
      to_path: {
        type: Schema.types.string,
        description: "Select destination folder",
        title: "Destination",
      },
      name: {
        type: Schema.types.string,
        description: "Enter new name",
        title: "New name",
      },
      dropbox_access_token: {
        type: Schema.slack.types.oauth2,
        title: "Dropbox access token",
      },
    },
    required: ["document_type", "from_path", "name", "dropbox_access_token"],
  },
  output_parameters: {
    properties: {
      id: {
        type: Schema.types.string,
        description: "Id of the folder",
        title: "Folder ID",
      },
      name: {
        type: Schema.types.string,
        description: "Folder name",
        title: "Name",
      },
      path_display: {
        type: Schema.types.string,
        description: "Display path",
        title: "Display path",
      },
    },
    required: [],
  },
});
