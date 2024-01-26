"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { atcb_action } from "add-to-calendar-button";
import { Session } from "@/utils/sessionize";
import { format } from "date-fns";

export const AddToCalendar = ({
  session,
  type = "icon",
}: {
  session: Session;
  type?: "text" | "icon";
}) => {
  // TODO: migrate this to
  const startDate = format(new Date(session.startsAt), "yyyy-MM-dd");
  const endDate = format(new Date(session.endsAt), "yyyy-MM-dd");
  const startTime = format(new Date(session.startsAt), "HH:mm");
  const endTime = format(new Date(session.endsAt), "HH:mm");

  const onClick = () => {
    atcb_action({
      name: session.title,
      description: `Join ${session.speakers[0].fullName} for ${session.title} at BlaBlaConf 2024`,
      location: "https://www.youtube.com/@GeeksBlaBla01",
      startDate,
      endDate,
      startTime,
      endTime,
      timeZone: "Africa/Casablanca",
      options: [
        "Apple",
        "Google",
        "iCal",
        "Microsoft365",
        "Outlook.com",
        "MicrosoftTeams",
        "Yahoo",
      ],
      listStyle: "modal",
    });
  };
  if (type === "icon") {
    return (
      <button
        onClick={onClick}
        className="relative mt-4 ml-1 rounded-full   bg-white/60 w-10 h-10 flex items-center justify-center font-medium  hover:scale-105 transition-all min-w-[40px]"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.38462 0C8.06435 0 8.61539 0.551034 8.61539 1.23077V3.69231H23.3846V1.23077C23.3846 0.551034 23.9357 0 24.6154 0C25.2951 0 25.8462 0.551034 25.8462 1.23077V3.69231H27.0769C29.7959 3.69231 32 5.89644 32 8.61539V27.0769C32 29.7959 29.7959 32 27.0769 32H4.92308C2.20414 32 0 29.7959 0 27.0769V8.61539C0 5.89644 2.20414 3.69231 4.92308 3.69231H6.15385V1.23077C6.15385 0.551034 6.70488 0 7.38462 0ZM29.5385 14.7692C29.5385 13.4098 28.4364 12.3077 27.0769 12.3077H4.92308C3.56361 12.3077 2.46154 13.4098 2.46154 14.7692V27.0769C2.46154 28.4364 3.56361 29.5385 4.92308 29.5385H27.0769C28.4364 29.5385 29.5385 28.4364 29.5385 27.0769V14.7692Z"
            fill="#7D5841"
          />
        </svg>
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="relative px-5 py-2 rounded-full border-2  bg-white/60 flex items-center justify-center font-medium  hover:scale-105 transition-all "
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 mr-2"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.38462 0C8.06435 0 8.61539 0.551034 8.61539 1.23077V3.69231H23.3846V1.23077C23.3846 0.551034 23.9357 0 24.6154 0C25.2951 0 25.8462 0.551034 25.8462 1.23077V3.69231H27.0769C29.7959 3.69231 32 5.89644 32 8.61539V27.0769C32 29.7959 29.7959 32 27.0769 32H4.92308C2.20414 32 0 29.7959 0 27.0769V8.61539C0 5.89644 2.20414 3.69231 4.92308 3.69231H6.15385V1.23077C6.15385 0.551034 6.70488 0 7.38462 0ZM29.5385 14.7692C29.5385 13.4098 28.4364 12.3077 27.0769 12.3077H4.92308C3.56361 12.3077 2.46154 13.4098 2.46154 14.7692V27.0769C2.46154 28.4364 3.56361 29.5385 4.92308 29.5385H27.0769C28.4364 29.5385 29.5385 28.4364 29.5385 27.0769V14.7692Z"
            fill="#7D5841"
          />
        </svg>
        <span className="text-gradient">Add to calendar </span>
      </button>
    );
  }
};
