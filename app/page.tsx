import { Community } from "@/components/community";
import { CommunityProjects } from "@/components/community-projects";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/hero";
import { PreviousSessions } from "@/components/previous-sessions";
import { Reviews } from "@/components/reviews";
import { Speakers } from "@/components/speakers";
import { Tracks } from "@/components/tracks";
import { getSpeakers } from "@/utils/api";

export default async function Home() {
  const speakers = await getSpeakers();
  return (
    <div>
      <Hero />
      <Community />
      <Tracks />
      <Speakers speakers={speakers} />
      <PreviousSessions />
      <CommunityProjects />
      <Reviews />
      <FAQ />
    </div>
  );
}
