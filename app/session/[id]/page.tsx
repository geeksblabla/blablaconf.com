import { AddToCalendar } from "@/components/agenda/add-to-calendar";
import { SessionTime } from "@/components/session-time";
import { Links } from "@/components/speakers";
import { getArrayOfSessions, getSession } from "@/utils/sessionize";
import Image from "next/image";

export async function generateStaticParams() {
  const sessions = await getArrayOfSessions();

  return sessions.map((session) => ({
    id: session.id,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getSession(params.id);
  if (session === undefined) {
    return (
      <section className="py-16 px-4  h-screen">session not founded</section>
    );
  }
  return (
    <section className="py-16 text-[#061431] min-h-[calc(100vh-150px)]">
      <div className="mx-auto md:flex-row flex flex-col max-w-screen-lg md:max-w-screen-xl md:px-8 px-4">
        <div className=" flex-1 mx-auto pt-10 max-w-screen-lg md:max-w-screen-xl md:px-8 px-4 min-h-[200px] md:min-h-[400px] text-gradient">
          <SessionTime session={session} showDay />
          <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl capitalize text-gray-700 ">
            {session.title}{" "}
          </h2>
          <p className="mb-12 text-lg font-medium text-gray-600 leading-normal">
            <Text text={session.description} />
          </p>
          <AddToCalendar session={session} type="text" />
        </div>
        <div className=" md:w-1/3 w-full mx-auto rounded-xl max-w-screen-lg md:max-w-screen-xl md:px-8 px-4 py-6 my-8 bg-[#E9D1AD] border-b-gray-200 border-solid border-b-[1px]">
          <p className="text-black font-semibold pb-3"> Speaker(s) </p>

          {session?.speakers &&
            session?.speakers.map((speaker) => (
              <div className="flex flex-col mb-10" key={`${speaker.id}`}>
                <div className="flex flex-row items-center ">
                  <Image
                    src={speaker.profilePicture}
                    className="w-24 h-24 border-2 border-white rounded-md"
                    width="64"
                    height="64"
                    alt={speaker.fullName}
                  />
                  <p className="pl-4 text-2xl font-bold ">
                    {speaker.fullName}
                    <br />
                    <span className="font-normal leading-[0.5rem] text-base ">
                      {speaker.tagLine}{" "}
                    </span>
                  </p>
                </div>

                <p className="py-3">
                  <Text text={speaker.bio} />{" "}
                </p>
                <div className="flex w-fit text-[#061431]">
                  <Links links={speaker.links || []} />
                </div>
              </div>
            ))}
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
