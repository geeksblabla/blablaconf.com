"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { atcb_action } from "add-to-calendar-button";
import { Session } from "@/utils/sessionize";

export const AddToCalendar = ({ session }: { session: Session }) => {
  const onClick = () => {
    atcb_action({
      name: session.title,
      description: `Join ${session.speakers[0].fullName} for ${session.title} at BlaBlaConf 2024`,
      location: "https://www.youtube.com/@GeeksBlaBla01",
      startDate: session.startsAt,
      endDate: session.endsAt,
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
  return (
    <button
      onClick={onClick}
      className="relative mt-4 rounded-lg border-2  bg-emerald-600 px-3 py-2 font-medium text-white transition hover:translate-y-1"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_277_5448)">
          <path
            d="M22.1864 21.4835H14.3114"
            stroke="white"
            strokeWidth="1.82813"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.2478 17.5459V25.4209"
            stroke="white"
            strokeWidth="1.82813"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.4989 5.73328H6.99893C6.37761 5.73328 5.87393 6.23696 5.87393 6.85828V29.3583C5.87393 29.9796 6.37761 30.4833 6.99893 30.4833H29.4989C30.1203 30.4833 30.6239 29.9796 30.6239 29.3583V6.85828C30.6239 6.23696 30.1203 5.73328 29.4989 5.73328Z"
            stroke="white"
            strokeWidth="1.82813"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.994 2.92078V5.73328"
            stroke="white"
            strokeWidth="1.82813"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4962 2.92078V5.73328"
            stroke="white"
            strokeWidth="1.82813"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.87393 12.4835H30.6239"
            stroke="white"
            strokeWidth="1.82813"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_277_5448">
            <rect
              width="36"
              height="36"
              fill="white"
              transform="translate(0.25 0.108398)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};
