"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { atcb_action } from "add-to-calendar-button";
import { Session } from "@/utils/sessionize";

export const AddToCalendar = ({
  session,
  type = "icon",
}: {
  session: Session;
  type?: "text" | "icon";
}) => {
  const onClick = () => {
    atcb_action({
      name: session.title,
      description: `Join ${session.speakers[0].fullName} for ${session.title} at BlaBlaConf 5.0`,
      location: "https://www.youtube.com/@GeeksBlaBla01",
      startDate: session.startDate,
      endDate: session.endDate,
      startTime: session.startTime,
      endTime: session.endTime,
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
        className="group flex items-center justify-center w-10 h-10 rounded-full bg-primary border-2 border-black shadow-[-3px_3px_0_0_black] hover:shadow-none hover:translate-x-[-3px] hover:translate-y-[3px] transition-all duration-300"
        aria-label="Add to calendar"
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
          className="text-black"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="12" y1="14" x2="12" y2="18" />
          <line x1="10" y1="16" x2="14" y2="16" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-5 py-3 bg-secondary text-white font-bold rounded-full border-2 border-black shadow-[-4px_4px_0_0_black] hover:shadow-none hover:translate-x-[-4px] hover:translate-y-[4px] transition-all duration-300"
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
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="12" y1="14" x2="12" y2="18" />
        <line x1="10" y1="16" x2="14" y2="16" />
      </svg>
      <span>Add to Calendar</span>
    </button>
  );
};

export const SeeMoreButton = ({
  onClick,
  isExpanded,
}: {
  onClick: () => void;
  isExpanded: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full border-2 border-black shadow-[-4px_4px_0_0_black] hover:shadow-none hover:translate-x-[-4px] hover:translate-y-[4px] hover:bg-primary transition-all duration-300"
    >
      <span>{isExpanded ? "Show Less" : "See More"}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
};
