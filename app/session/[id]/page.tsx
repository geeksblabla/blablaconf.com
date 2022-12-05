import { SessionTime } from "@/components/session-time";
import { Links } from "@/components/speakers";
import { getArrayOfSessions, getSession } from "@/utils/sessionize";

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
      <section className="py-16 px-4 bg-green-100/50 h-screen">
        session not founded
      </section>
    );
  }
  return (
    <section className="py-16 px-4 bg-green-100/50">
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl md:px-8 px-4">
        <SessionTime session={session} showDay />
        <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl capitalize ">
          {session.title}{" "}
        </h2>
        <p className="mb-12 text-lg font-medium text-gray-600 leading-normal">
          <Text text={session.description} />
        </p>
      </div>
      <div className=" mx-auto max-w-screen-lg md:max-w-screen-xl md:px-8 px-4 py-6 border-b-gray-200 border-solid border-b-[1px]">
        <p className="text-gray-500 text-bold pb-3"> Speaker </p>
        {session?.speakers?.[0] && (
          <>
            <div className="flex flex-row items-center ">
              <img
                src={session?.speakers?.[0]?.profilePicture}
                className="w-16 h-16 rounded-full"
              />
              <p className="pl-4 font-bold text-gray-700">
                {session?.speakers?.[0]?.fullName}
                <br />
                <span className="font-normal text-xs text-gray-500">
                  {session?.speakers?.[0]?.tagLine}{" "}
                </span>
              </p>
            </div>
            <Links links={session?.speakers?.[0]?.links || []} />
            <p className="py-3">
              <Text text={session?.speakers?.[0].bio} />{" "}
            </p>
          </>
        )}
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
