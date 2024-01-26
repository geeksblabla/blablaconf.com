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
    <section className="py-16">
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl md:px-8 px-4">
        <div className="mx-auto max-w-screen-lg md:max-w-screen-xl md:px-8 px-4 min-h-[200px] md:min-h-[400px] text-gradient">
          <SessionTime session={session} showDay />
          <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl capitalize ">
            {session.title}{" "}
          </h2>
          <p className="mb-12 text-lg font-medium text-gray-600 leading-normal">
            <Text text={session.description} />
          </p>
          <AddToCalendar session={session} type="text" />
        </div>
        <div className=" mx-auto max-w-screen-lg md:max-w-screen-xl md:px-8 px-4 py-6 my-8 border-b-gray-200 border-solid border-b-[1px]">
          <p className="text-black font-semibold pb-3"> Speaker </p>
          {session?.speakers?.[0] && (
            <>
              <div className="flex flex-row items-center ">
                <Image
                  src={session?.speakers?.[0]?.profilePicture}
                  className="w-16 h-16 rounded-full"
                  width="64"
                  height="64"
                  alt={session?.speakers?.[0]?.fullName}
                />
                <p className="pl-4 font-bold text-gradient">
                  {session?.speakers?.[0]?.fullName}
                  <br />
                  <span className="font-normal text-sm ">
                    {session?.speakers?.[0]?.tagLine}{" "}
                  </span>
                </p>
              </div>

              <p className="py-3">
                <Text text={session?.speakers?.[0].bio} />{" "}
              </p>
              <div className="flex w-fit text-black">
                <Links links={session?.speakers?.[0]?.links || []} />
              </div>
            </>
          )}
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
