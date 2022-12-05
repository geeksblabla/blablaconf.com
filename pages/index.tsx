import { Agenda } from "@/components/agenda";
import { Community } from "@/components/community";
import { CommunityProjects } from "@/components/community-projects";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/hero";
import { Layout } from "@/components/layout";
import { PreviousSessions } from "@/components/previous-sessions";
import { Reviews } from "@/components/reviews";
import { Speakers } from "@/components/speakers";
import { Sponsors } from "@/components/sponsors";
import { Tracks } from "@/components/tracks";
import {
  getSessions,
  getSpeakers,
  SessionByDay,
  Speaker,
} from "@/utils/sessionize";

const Home = ({
  speakers,
  days,
}: {
  speakers: Speaker[];
  days: SessionByDay[];
}) => {
  return (
    <>
      <Layout>
        <div>
          <Hero />
          <Community />
          <Tracks />
          <Speakers speakers={speakers} />
          <Agenda days={days} />
          <PreviousSessions />
          <CommunityProjects />
          <Sponsors />
          <Reviews />
          <FAQ />
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const speakers = await getSpeakers();
  const days = await getSessions();
  return {
    props: {
      speakers,
      days,
    }, // will be passed to the page component as props
  };
}

export default Home;
