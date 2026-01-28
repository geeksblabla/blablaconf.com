"use client";

import { Session, SessionByDay } from "@/utils/sessionize";
import { useState } from "react";

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
];

export const AgendaRow = ({ days }: { days: SessionByDay<Session>[] }) => {
  return (
    <section className="mx-auto py-16 max-w-screen-lg">
      {days.slice(0, 5).map((day, dayIndex) => (
        <div key={`day-${dayIndex}`} className="mb-12 pose">
          <h2 className="font-bold mb-4 text-2xl text-primary-500 border-b-2 border-primary-200 pb-2">
            {days_titles[dayIndex].date} February -{" "}
            <span className="text-primary-400">
              {days_titles[dayIndex].title}
            </span>
          </h2>
          <div className="space-y-6">
            {day.sessions.map((session) => (
              <Session key={session.id} session={session} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

const Session = ({ session }: { session: Session }) => {
  const [copied, setCopied] = useState(false);
  const speakers = session.speakers?.map((s) => s.fullName).join(", ") || "";
  const title = ` ${session.title}${speakers ? ` w/ ${speakers}` : ""} 🇲🇦 `;

  const cleanedDescription = session.description
    ? session.description.replace(/\n\s*\n/g, "\n")
    : "";

  const speakers_description =
    session.speakers
      ?.map((speaker) => {
        const speakerLinks =
          speaker.links
            ?.map((link) => `${link.linkType}: ${link.url}`)
            .join("\n") || "";

        const cleanedBio = speaker.bio
          ? speaker.bio.replace(/\n\s*\n/g, "\n")
          : "";

        return `👥  Speaker\n---------------------\n${speaker.fullName}\n${cleanedBio}\n${speakerLinks}`;
      })
      .join("\n\n") || "";

  const followUp = ` 🔗 Follow us
 ---------------------
Spotify: https://open.spotify.com/show/0UlTBXh7iH6x0HO6FgYzAD
LinkedIn: https://www.linkedin.com/company/geeksblabla-community
Facebook: https://www.facebook.com/geeksblabla
Twitter: https://twitter.com/geeksblabla
Instagram: https://www.instagram.com/geeksblabla
GitHub: https://github.com/geeksblabla

Visit our website: https://geeksblabla.community`;
  const tags =
    "#GeeksBlabla #blablaConf #darija  #تكنولوجيا #المغرب #برمجة #مبرمجين_مغاربة #تقنية #بودكاست_مغربي #تعلم_البرمجة #مطورين #تكنولوجيا_المعلومات #مجتمع_البرمجة #تطوير_الويب #دروس_برمجة #تقنية_المعلومات";

  const description = `${cleanedDescription}\n\n${speakers_description}\n\n${followUp}\n\n${tags}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(description).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col gap-3 border border-primary-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <h3 className="text-lg font-semibold bg-primary-100 p-3 text-primary-500">
        {title}
      </h3>
      <div className="relative text-gray-700 bg-white w-full overflow-hidden p-4 rounded-md">
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 bg-primary-100 rounded-md hover:bg-primary-200 transition-colors shadow-sm flex items-center gap-2"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-primary-500 hidden md:inline">
                Copied!
              </span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              <span className="text-sm text-primary-400 hidden md:inline">
                Copy
              </span>
            </>
          )}
        </button>
        <div className="pr-24 md:pr-28">
          <Text text={description} />
        </div>
      </div>
    </div>
  );
};

const Text = ({ text = "" }: { text: string }) => {
  return (
    <>
      {text?.split("\n").map(function (item, idx) {
        return (
          <span key={idx} className="leading-relaxed">
            {item}
            <br />
          </span>
        );
      })}
    </>
  );
};
