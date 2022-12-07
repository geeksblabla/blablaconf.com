/* eslint-disable @next/next/no-img-element */
import { Session, SessionByDay } from "@/utils/sessionize";
import Link from "next/link";
import { SessionTime } from "../session-time";
import { DaysMenu } from "./days-menu";

const days_titles = [
  {
    title: "UX, Web & Mobile",
    date: "December 19",
  },
  {
    title: "Big Data & Machine Learning",
    date: "December 20",
  },
  {
    title: "Backend & Programming Languages",
    date: "December 21",
  },
  {
    title: "Cloud, Containers & Infrastructure",
    date: "December 22",
  },
  {
    title: "Security & Architecture",
    date: "December 23",
  },
  {
    title: "Offline Day",
    date: "December 24",
  },
];

export const Agenda = ({ days }: { days: SessionByDay[] }) => {
  return (
    <section id="agenda" className="py-16 bg-green-50">
      <div className="mx-auto max-w-screen-xl mb-10 pt-8 md:mb-16 md:px-8 px-4">
        <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl capitalize ">
          Agenda
        </h2>
        <p className="mb-12 text-lg font-medium text-gray-600 leading-normal max-w-[650px]">
          Make sure not to miss any talks by adding them to your calendar.
          <br /> PS: The schedule below is Moroccan Timezone (GMT+1)
        </p>
      </div>
      <div className="relative  mx-auto flex flex-col sm:max-w-xl md:max-w-screen-xl md:flex-row md:justify-between md:px-8 px-4">
        <DaysMenu days={days_titles} />
        <div className="flex flex-col h-full w-full  bg-white p-4 rounded-lg ">
          {days.map((day, index) => {
            return (
              <div id={`day-${index}`} key={`day-${index}`} className="py-4">
                <span className="bg-gray-100 w-fit px-3 rounded-xl text-gray-700 -mb-4">
                  {days_titles[index].date}{" "}
                </span>
                <h1 className="text-3xl py-4 font-bold">
                  {days_titles[index].title}
                </h1>
                {day.sessions.map((session, index) => {
                  return <Session key={`session-${index}`} session={session} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Session = ({ session }: { session: Session }) => {
  return (
    <div className="py-6 border-b-gray-200 border-solid border-b-[1px]">
      <SessionTime session={session} />
      <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900 ">
        {session.title}
      </h3>
      {session?.speakers?.[0] && (
        <>
          <div className="flex flex-row items-center p-2">
            <img
              src={session?.speakers?.[0]?.profilePicture}
              className="w-10 h-10 rounded-full"
              alt={`Speaker ${session?.speakers?.[0]?.fullName}`}
            />
            <p className="pl-4 font-bold text-gray-700">
              {session?.speakers?.[0]?.fullName}
              <br />
              <span className="font-normal text-xs text-gray-500">
                {session?.speakers?.[0]?.tagLine}{" "}
              </span>
            </p>
          </div>

          <Link
            className="underline underline-offset-1"
            href={`/session/${session.id}`}
          >
            See More
          </Link>
        </>
      )}
    </div>
  );
};
