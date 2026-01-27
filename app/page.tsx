import { Agenda } from "@/components/agenda";
import { AgendaRow } from "@/components/agenda/row";
import { Community } from "@/components/community";
import { CommunityProjects } from "@/components/community-projects";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/hero";
import { PreviousSessions } from "@/components/previous-sessions";
import { Reviews } from "@/components/reviews";
import { Speakers } from "@/components/speakers";
import { Sponsors } from "@/components/sponsors";
import Timer from "@/components/timer";
import { Tracks } from "@/components/tracks";
import { getSessions, getSpeakers } from "@/utils/sessionize";
// import { ConferenceDoneModal } from "@/components/conference-done-modal";

export default async function Home() {
  const speakers = await getSpeakers();
  const days = await getSessions();

  return (
    <div>
      {/* <ConferenceDoneModal /> */}
      <Hero />
      <Timer/>
      <Tracks />
      <Sponsors />
      <Community />
      <Speakers speakers={speakers} />
      <Agenda days={days} />
      <PreviousSessions />
      <CommunityProjects />
      <Reviews />
      <FAQ />

    </div>
  );
}
