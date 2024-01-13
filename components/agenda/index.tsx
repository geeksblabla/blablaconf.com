/* eslint-disable @next/next/no-img-element */
import { Session, SessionByDay } from "@/utils/sessionize";
import Link from "next/link";
import { SessionTime } from "../session-time";
import { AddToCalendar } from "./add-to-calendar";
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
    title: "Security & Architecture ",
    date: "December 23",
  },
  {
    title: "In Person Day",
    date: "December 24",
  },
];

export const Agenda = ({ days }: { days: SessionByDay[] }) => {
  return (
    <section id="agenda" className="mx-auto py-16 text-[#835E47]">
      <div className="overflow-hidden">
        <div className="relative bg-[#825C45]/6 mx-auto max-w-lg md:max-w-screen-xl my-5">
          <div className="absolute bg-[url('/images/pattern.svg')] bg-contain bg-repeat top-0 bottom-0 w-[200vh]" />
          <div className="flex flex-row items-center md:px-8 px-4 py-4">
            <div className="flex flex-row ">
              <h1 className="text-4xl sm:text-6xl text-[#835E47] font-bold  capitalize mb-3 mr-6  z-10">
                Agenda
              </h1>
            </div>

            <p className="text-lg font-medium leading-6  text-[#835E47] max-w-[650px]  z-10 ">
              Make sure to not miss any talks by adding them to your calendar.
              <br />
              PS:The schedule below is Moroccan Timezone (GMT+1)
            </p>
          </div>
        </div>
      </div>
      <div className="relative  mx-auto flex flex-col sm:max-w-xl md:max-w-screen-xl md:flex-row md:justify-between">
        <DaysMenu days={days_titles} />
        <div className="flex flex-col h-full w-full pt-16">
          {days.map((day, index) => {
            return (
              <div id={`day-${index}`} key={`day-${index}`} className="mb-16">
                <span className="bg-[#7D5841]/80 w-fit px-3 rounded-xl text-white -mb-4">
                  {days_titles[index].date}{" "}
                </span>
                <h1 className="text-3xl py-4 font-bold text-gradient ">
                  {days_titles[index].title}
                </h1>
                {index === 5 && (
                  <p className="text-md font-medium text-gray-600 leading-normal max-w-[650px]">
                    Location :{" "}
                    <span className="text-lg font-medium text-gray-800">
                      EMSI Moulay Youssef, Casablanca
                    </span>
                    <a
                      href="https://goo.gl/maps/3ZFXp2iVJkgQpXEf7"
                      target="_blank"
                      rel="noreferrer"
                      className="text-md underline underline-offset-1 pl-2"
                    >
                      View on Google Maps
                    </a>
                  </p>
                )}

                {day.sessions.map((session, index) => {
                  return (
                    <Session
                      key={`session-${index}`}
                      session={session}
                      index={index}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Session = ({ session, index }: { session: Session; index: number }) => {
  return (
    <div
      className={`p-6 my-4 bg-[#CC9B80]/20  rounded-lg  ${
        index === 0
          ? "bg-[url('/images/pattern.svg')] bg-contain bg-repeat"
          : ""
      } `}
    >
      <div className="flex flex-col justify-between ">
        <div className="flex flex-row content-end justify-between ">
          <div>
            <SessionTime session={session} />
            <h3 className="flex items-center mb-1 text-xl font-bold -mt-1 text-gradient">
              <Link href={`/session/${session.id}`}>{session.title}</Link>
            </h3>
          </div>
          {session?.speakers?.[0] && <AddToCalendar session={session} />}
        </div>

        {session?.speakers &&
          session?.speakers.map((speaker) => (
            <div
              className="flex flex-row justify-between items-end  "
              key={speaker?.id}
              id={`speaker-session-${speaker?.id}`}
            >
              <div className="flex flex-row items-center p-2">
                <img
                  src={speaker?.profilePicture}
                  className="w-14 h-14 rounded-full"
                  alt={`Speaker ${speaker?.fullName}`}
                />
                <p className="pl-4 font-bold text-gradient ">
                  {speaker?.fullName}
                  <br />
                  <span className="font-normal text-sm text-[#434343]">
                    {speaker?.tagLine}{" "}
                  </span>
                </p>
              </div>

              <Link
                className="px-6 py-2 rounded-full bg-white text-sm"
                href={`/session/${session.id}`}
              >
                See More
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
