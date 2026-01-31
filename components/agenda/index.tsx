"use client";

/* eslint-disable @next/next/no-img-element */
import type { Session as SessionType, SessionByDay } from "@/utils/sessionize";
import { useState } from "react";
import { SessionTime } from "../session-time";
import { AddToCalendar } from "./add-to-calendar";
import { DaysMenu } from "./days-menu";
import { SessionDialog } from "./session-dialog";
import { SpeakerAvatar } from "../speaker-avatar";

const days_titles = [
  {
    title: "UX, Web & Mobile",
    date: "02",
  },
  {
    title: "Big Data & Machine Learning",
    date: "03",
  },
  {
    title: "Backend & Programming Languages",
    date: "04",
  },
  {
    title: "Cloud, Containers & Infrastructure",
    date: "05",
  },
  {
    title: "Security & Architecture ",
    date: "06",
  },
  // {
  //   title: "In Person Day",
  //   date: "February 24",
  // },
];

export const Agenda = ({ days }: { days: SessionByDay<SessionType>[] }) => {
  return (
    <section id="agenda" className="mx-auto py-16 bg-tertiary">
      <div className="overflow-hidden">
        <div className="relative mx-auto max-w-lg md:max-w-screen-xl my-5">
          <div className="flex flex-col items-center md:px-8 px-4 py-4 text-center ">
            <div className="mx-auto ">
              <div className="title-style leading-[0.8]">
                <span className="mx-auto text-primary">البطولة</span>
                <span className="mx-auto text-secondary">Agenda</span>
              </div>
              <p
                className="text-center mx-auto max-w-2xl text-xl pt-6 font-bold [-webkit-text-stroke:8px_white] [paint-order:stroke_fill] pb-6"
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
      <div className="relative  mx-auto flex flex-col md:max-w-screen-xl md:flex-row md:justify-between md:px-4 lg:px-4 xl:px-0">
        <DaysMenu days={days_titles} />
        <div className="flex flex-col h-full w-full">
          {days.slice(0, 5).map((day, index) => {
            return (
              <div
                id={`day-${index}`}
                key={`day-${index}`}
                className="mb-16 relative"
              >
                <div className="flex md:relative sticky top-0 px-6 py-4 flex-row md:rounded-[2rem] rounded-none z-10 items-center justify-between md:bg-secondary bg-secondary/80 md:backdrop-none backdrop-blur-[10px] border-none md:border-solid md:border-[3px] md:border-black md:shadow-[-6px_6px_0_0_black]">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-black text-white">
                      {days_titles[index].date} February
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl text-white text-right font-marhaban">
                    {days_titles[index].title}
                  </h1>
                </div>
                <div className="px-4 md:px-0">
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
    </section>
  );
};

const Session = ({
  session,
  index,
}: {
  session: SessionType;
  index: number;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const hasSpeakers = session?.speakers && session.speakers.length > 0;

  return (
    <>
      <div
        className={`p-5 my-4 rounded-[2rem] border-[3px] border-black shadow-[-6px_6px_0_0_black] ${hasSpeakers ? "bg-white" : "bg-primary"}`}
      >
        <div className="flex flex-col justify-between">
          {/* Title & Time Row */}
          <div className="flex flex-row justify-between items-start gap-4">
            <h3
              className={`text-xl font-bold flex-1 ${!hasSpeakers ? "text-center w-full flex items-center justify-between gap-3" : ""}`}
            >
              {hasSpeakers ? (
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="text-left hover:underline"
                >
                  {session.title}
                </button>
              ) : (
                <>
                  <span>{session.title}</span>
                  <div className="text-right">
                    <SessionTime session={session} />
                  </div>
                </>
              )}
            </h3>
            {hasSpeakers && (
              <div className="text-right">
                <SessionTime session={session} />
              </div>
            )}
          </div>

          {/* Speaker & Actions Row - Only show if has speakers */}
          {hasSpeakers && (
            <div className="flex flex-col md:flex-row justify-between md:items-end items-start gap-4 mt-3">
              {/* Speakers Info */}
              <div className="flex flex-wrap gap-4">
                {session.speakers.map((speaker) => (
                  <div
                    className="flex flex-row items-center"
                    key={speaker?.id}
                    id={`speaker-session-${speaker?.id}`}
                  >
                    <SpeakerAvatar
                      fullName={speaker?.fullName}
                      profilePicture={speaker?.profilePicture}
                      size="sm"
                    />
                    <p className="pl-3 font-bold text-black">
                      {speaker?.fullName}
                      <br />
                      <span className="font-normal text-sm text-black/80">
                        {speaker?.tagLine}
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 items-center shrink-0">
                <AddToCalendar session={session} />
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-secondary border-2 border-black shadow-[-3px_3px_0_0_black] hover:shadow-none hover:-translate-x-[3px] hover:translate-y-[3px] transition-all duration-300"
                  aria-label="See more"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <SessionDialog
        session={session}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};
