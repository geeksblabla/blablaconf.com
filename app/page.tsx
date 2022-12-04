import { Agenda } from "@/components/Agenda";
import { Community } from "@/components/community";
import { CommunityProjects } from "@/components/community-projects";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/hero";
import { PreviousSessions } from "@/components/previous-sessions";
import { Reviews } from "@/components/reviews";
import { Speakers } from "@/components/speakers";
import { Sponsors } from "@/components/sponsors";
import { Tracks } from "@/components/tracks";
import { getSessions, getSpeakers } from "@/utils/sessionize";

export default async function Home() {
  const speakers = await getSpeakers();
  // const days = await getSessions();

  return (
    <div>
      <Hero />
      <Community />
      <Tracks />
      <Speakers speakers={speakers} />
      {/* <Agenda days={days} /> */}
      <PreviousSessions />
      <CommunityProjects />
      <Reviews />
      <FAQ />
      <Sponsors />
    </div>
  );
}
