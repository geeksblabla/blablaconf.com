/* eslint-disable @next/next/no-img-element */
import { Session, SessionByDay } from "@/utils/sessionize";
import Link from "next/link";
import { SessionTime } from "../session-time";
import { AddToCalendar } from "./add-to-calendar";
import { DaysMenu } from "./days-menu";
import Image from "next/image";
import { InPersonDays } from "./in-person-days";
import agendaTitle from "@/images/titles/agenda.png";

const days_titles = [
  {
    title: "UX, Web & Mobile",
    date: "03",
  },
  {
    title: "Big Data & Machine Learning",
    date: "04",
  },
  {
    title: "Backend & Programming Languages",
    date: "05",
  },
  {
    title: "Cloud, Containers & Infrastructure",
    date: "06",
  },
  {
    title: "Security & Architecture ",
    date: "07",
  },
  // {
  //   title: "In Person Day",
  //   date: "February 24",
  // },
];

const cities = [
  {
    name: "Marrakech",
    date: "February 24, 2pm",
    place: "TBD",
  },
  {
    name: "Casablanca",
    date: "February 24, 2pm",
    place: "TBD",
  },
  {
    name: "khouribga",
    date: "February 24, 2pm",
    place: "TBD",
  },
  {
    name: "Rabat",
    date: "February 24, 2pm",
    place: "TBD",
  },
];

export const Agenda = ({ days }: { days: SessionByDay<Session>[] }) => {
  return (
    <section id="agenda" className="mx-auto py-16 text-[#EEE1C5] bg-[#EEE1C5]">
      <div className="overflow-hidden">
        <div className="relative bg-[#EEE1C5] mx-auto max-w-lg md:max-w-screen-xl my-5">
          <div className="flex flex-col items-center md:px-8 px-4 py-4 text-center ">
            <div className="mx-auto ">
              <Image
                src={agendaTitle}
                alt="agenda title"
                className="mx-auto md:max-h-[160px] max-h-[120px] object-contain"
              />
              <p
                className="my-6 text-base text-center  font-[400] text-[#282828]/60 leading-normal max-w-[450px] mx-auto "
                ata-sal="fade"
                data-sal-delay="100"
                data-sal-duration="500"
              >
                Make sure to not miss any talks by adding them to your calendar.
                <br />
                PS:The schedule below is Moroccan Timezone (GMT+1)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  mx-auto flex flex-col sm:max-w-xl md:max-w-screen-xl md:flex-row md:justify-between  lg:px-4  xl:px-0">
        <DaysMenu days={days_titles} />
        <div className="flex flex-col h-full w-full">
          {days.slice(0, 5).map((day, index) => {
            return (
              <div
                id={`day-${index}`}
                key={`day-${index}`}
                className="mb-16 relative"
              >
                <div className="flex md:relative sticky top-0 px-5 flex-row md:rounded-2xl rounded-none z-10 items-center justify-between bg-gradient-to-r from-[#E7B041]/30 to-[#E7B041]">
                  <span className="w-fit text-xl font-bold rounded-xl text-[#53925E] min-w-[120px] ">
                    {days_titles[index].date} February
                  </span>
                  <h1 className="text-lg py-4  text-black text-right ">
                    {days_titles[index].title}
                  </h1>
                </div>
                <div className="px-4 md:px-0">
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
              </div>
            );
          })}
          <div className="md:pt-16 pt-3" />
        </div>
      </div>
      <InPersonDays />
    </section>
  );
};

const Session = ({ session, index }: { session: Session; index: number }) => {
  return (
    <div
      className={`p-5 my-4 bg-[#F7EEDD]  rounded-lg  ${
        index === 0
          ? "bg-[url('/images/min-pattern.svg')] bg-contain bg-repeat"
          : ""
      } `}
    >
      <div className="flex flex-col justify-between ">
        <div className="flex flex-row content-end justify-between ">
          <div>
            <SessionTime session={session} />
            <h3 className="flex items-center mb-1 text-xl font-bold -mt-1 text-[#061431]">
              <Link href={`/session/${session.id}`}>{session.title}</Link>
            </h3>
          </div>
          {session?.speakers?.[0] && <AddToCalendar session={session} />}
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-end item-start">
          <div>
            {session?.speakers &&
              session?.speakers.map((speaker) => (
                <div
                  className="flex flex-row justify-between items-end  "
                  key={speaker?.id}
                  id={`speaker-session-${speaker?.id}`}
                >
                  <div className="flex flex-row items-center pr-2 pt-2">
                    <Image
                      alt={`${speaker?.fullName} profile picture`}
                      src={speaker?.profilePicture}
                      className="w-14 h-14 rounded-lg border-[3px] border-white"
                      height="60"
                      width="60"
                    />
                    <p className="pl-2 font-bold text-[#53925E]">
                      {speaker?.fullName}
                      <br />
                      <span className="font-normal text-sm text-[#434343]">
                        {speaker?.tagLine}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {session?.speakers?.[0] && (
            <Link
              className="px-6 py-2 rounded-md bg-[#53925E] text-base min-w-[110px] text-center self-end shadow-[3px_3px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000000] transition-all duration-300 border-2 border-black"
              href={`/session/${session.id}`}
            >
              See More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
