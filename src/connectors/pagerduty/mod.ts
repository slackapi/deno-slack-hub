/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import AddANote from "./functions/add_a_note.ts";
import CreateIncident from "./functions/create_incident.ts";
import EscalateIncident from "./functions/escalate_incident.ts";
import ResolveIncident from "./functions/resolve_incident.ts";

const Pagerduty = {
  functions: { AddANote, CreateIncident, EscalateIncident, ResolveIncident },
} as const;

export default Pagerduty;
