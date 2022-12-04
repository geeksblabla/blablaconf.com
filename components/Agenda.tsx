/* eslint-disable @next/next/no-img-element */
import { Session, SessionByDay } from "@/utils/sessionize";
import Link from "next/link";
import { SessionTime } from "./session-time";

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
    title: "Security & Architecture",
    date: "December 21",
  },
  {
    title: "Cloud, Containers & Infrastructure",
    date: "December 22",
  },
  {
    title: "Backend Technologies & Programming Languages",
    date: "December 23",
  },
  {
    title: "Offline Day",
    date: "December 24",
  },
];

export const Agenda = ({ days }: { days: SessionByDay[] }) => {
  return (
    <section id="agenda" className=" py-16 bg-green-100/50">
      <div className="mx-auto max-w-screen-xl mb-10 pt-8 md:mb-16 md:px-8 px-4">
        <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl capitalize ">
          Agenda
        </h2>
        <p className="mb-12 text-lg font-medium text-gray-600 leading-normal max-w-[650px]">
          Make sure to not miss any talks by adding them to your calendar.
          <br /> PS: The schedule below is Moroccan Timezone (GMT+1)
        </p>
      </div>
      <div className="relative  mx-auto flex flex-col sm:max-w-xl md:max-w-screen-xl md:flex-row md:justify-between md:px-8 px-4">
        <div className="sticky top-8  h-fit ">
          <ul className="relative border-l border-gray-300 pr-12 h-fit">
            {days_titles.map((day, index) => {
              return (
                <Day
                  day={day.date}
                  title={day.title}
                  key={`day-${index}`}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
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

const Day = ({
  day,
  title,
  index,
}: {
  day: string;
  title: string;
  index: number;
}) => {
  return (
    <li className="mb-10 ml-6 min-h-[80px]">
      <a href={`/#day-${index}`}>
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-2 ring-blue-200 ">
          <svg
            aria-hidden="true"
            className="w-4 h-4 text-blue-400 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-500 ">
          {day}
        </time>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
          {title}
        </h3>
      </a>
    </li>
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
