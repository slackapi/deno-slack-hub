/** This file was autogenerated on Fri May 05 2023. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import AddBookmark from "./add_bookmark.ts";
import AddChannelManager from "./add_channel_manager.ts";
import AddPin from "./add_pin.ts";
import AddUserToUsergroup from "./add_user_to_usergroup.ts";
import ArchiveChannel from "./archive_channel.ts";
import CreateChannel from "./create_channel.ts";
import CreateUsergroup from "./create_usergroup.ts";
import Delay from "./delay.ts";
import InviteUserToChannel from "./invite_user_to_channel.ts";
import OpenForm from "./open_form.ts";
import RemoveUserFromUsergroup from "./remove_user_from_usergroup.ts";
import ReplyInThread from "./reply_in_thread.ts";
import SendDm from "./send_dm.ts";
import SendEphemeralMessage from "./send_ephemeral_message.ts";
import SendMessage from "./send_message.ts";
import UpdateChannelTopic from "./update_channel_topic.ts";

const SlackFunctions = {
  AddBookmark,
  AddChannelManager,
  AddPin,
  AddUserToUsergroup,
  ArchiveChannel,
  CreateChannel,
  CreateUsergroup,
  Delay,
  InviteUserToChannel,
  OpenForm,
  RemoveUserFromUsergroup,
  ReplyInThread,
  SendDm,
  SendEphemeralMessage,
  SendMessage,
  UpdateChannelTopic,
} as const;

export default SlackFunctions;
