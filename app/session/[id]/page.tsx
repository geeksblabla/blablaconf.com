import { AddToCalendar } from "@/components/agenda/add-to-calendar";
import { SessionTime } from "@/components/session-time";
import { Links } from "@/components/speakers";
import { getArrayOfSessions, getSession } from "@/utils/sessionize";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const sessions = await getArrayOfSessions();

  return sessions.map((session) => ({
    id: session.id,
  }));
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const session = await getSession(params.id);

  if (session === undefined) {
    return (
      <section className="py-16 px-5 sm:px-20 flex items-center justify-center">
        <div className="bg-white rounded-[2rem] border-[3px] border-black shadow-[-8px_8px_0_0_black] p-8 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-black text-black mb-4">
            Session Not Found
          </h2>
          <p className="text-black/70 mb-6">
            The session you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/#agenda"
            className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-full border-[3px] border-black shadow-[-4px_4px_0_0_black] hover:shadow-none hover:translate-x-[-4px] hover:translate-y-[4px] transition-all duration-300"
          >
            Back to Agenda
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-5 sm:px-20 min-h-[calc(100vh-150px)]">
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl ">
        {/* Back Button */}
        <Link
          href="/#agenda"
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white text-black font-bold rounded-full border-[3px] border-black shadow-[-4px_4px_0_0_black] hover:shadow-none hover:translate-x-[-4px] hover:translate-y-[4px] hover:bg-primary transition-all duration-300"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Agenda
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-[2rem] border-[3px] border-black shadow-[-8px_8px_0_0_black] p-8">
              <SessionTime session={session} showDay />
              <h1 className="text-3xl md:text-4xl font-black text-black mt-4 mb-6">
                {session.title}
              </h1>
              <div className="text-black/70 text-lg leading-relaxed mb-8">
                <Text text={session.description} />
              </div>
              <AddToCalendar session={session} type="text" />
            </div>
          </div>

          {/* Speakers Sidebar */}
          <div className="lg:w-[400px]">
            <div className="bg-tertiary rounded-[2rem] border-[3px] border-black shadow-[-8px_8px_0_0_black] p-6">
              <h2 className="text-xl font-black text-black mb-6">
                {session.speakers.length > 1 ? "Speakers" : "Speaker"}
              </h2>

              <div className="space-y-6">
                {session?.speakers?.map((speaker) => (
                  <div
                    key={speaker.id}
                    className="bg-white rounded-2xl border-[3px] border-black p-4"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={speaker.profilePicture}
                        className="w-16 h-16 rounded-full border-2 border-black object-cover"
                        width={64}
                        height={64}
                        alt={speaker.fullName}
                      />
                      <div>
                        <h3 className="font-black text-black text-lg">
                          {speaker.fullName}
                        </h3>
                        <p className="text-black/60 text-sm">
                          {speaker.tagLine}
                        </p>
                      </div>
                    </div>

                    <p className="text-black/70 text-sm leading-relaxed mb-4">
                      <Text text={speaker.bio} />
                    </p>

                    <Links links={speaker.links || []} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Text = ({ text = "" }: { text: string }) => {
  return (
    <>
      {text?.split("\n").map(function (item, idx) {
        return (
          <span key={idx}>
            {item}
            <br />
          </span>
        );
      })}
    </>
  );
};
