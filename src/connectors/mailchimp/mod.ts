/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import AddContact from "./functions/add_contact.ts";
import CreateCampaign from "./functions/create_campaign.ts";
import GetCampaignReport from "./functions/get_campaign_report.ts";
import SendCampaign from "./functions/send_campaign.ts";

const Mailchimp = {
  functions: {
    /**
     * @see The {@link https://api.slack.com/reference/connectors/mailchimp/add_contact AddContact} documentation.
     */
    AddContact,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/mailchimp/create_campaign CreateCampaign} documentation.
     */
    CreateCampaign,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/mailchimp/get_campaign_report GetCampaignReport} documentation.
     */
    GetCampaignReport,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/mailchimp/send_campaign SendCampaign} documentation.
     */
    SendCampaign,
  },
} as const;

export default Mailchimp;