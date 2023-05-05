/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import CreateIncident from "./create_incident.ts";
import EscalateIncident from "./escalate_incident.ts";
import ResolveIncident from "./resolve_incident.ts";

const Pagerduty = {
  CreateIncident,
  EscalateIncident,
  ResolveIncident,
} as const;

export default Pagerduty;
