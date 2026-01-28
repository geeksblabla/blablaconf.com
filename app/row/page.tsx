import { AgendaRow } from "@/components/agenda/row";
import { getSessions } from "@/utils/sessionize";

export default async function Row() {
  const days = await getSessions();
  // Get the first session from the first day as an example
  const firstSession = days[0]?.sessions?.[0];

  if (!firstSession) {
    return <div>No sessions found</div>;
  }

  return <AgendaRow session={firstSession} index={0} />;
}
