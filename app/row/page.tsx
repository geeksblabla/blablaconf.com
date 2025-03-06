import { AgendaRow } from "@/components/agenda/row";

import { getSessions } from "@/utils/sessionize";

export default async function Row() {
  const days = await getSessions();
  return <AgendaRow days={days} />;
}
