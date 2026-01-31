"use client";

import type { Session as SessionType } from "@/utils/sessionize";
import Image from "next/image";
import { SessionTime } from "../session-time";

interface SessionDialogProps {
  session: SessionType;
  isOpen: boolean;
  onClose: () => void;
}

export const SessionDialog = ({
  session,
  isOpen,
  onClose,
}: SessionDialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative z-10 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] border-[3px] border-black shadow-[-6px_6px_0_0_black] p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-secondary border-2 border-black shadow-[-3px_3px_0_0_black] hover:shadow-none hover:translate-x-[-3px] hover:translate-y-[3px] transition-all duration-300"
          aria-label="Close dialog"
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Session Title */}
        <h2 className="text-2xl md:text-3xl font-bold pr-12 mb-4">
          {session.title}
        </h2>

        {/* Time */}
        <div className="mb-4" dir="rtl">
          <SessionTime session={session} />
        </div>

        {/* Description */}
        {session.description && (
          <p className="text-black/80 mb-6 whitespace-pre-wrap">
            {session.description}
          </p>
        )}

        {/* Speakers */}
        {session.speakers && session.speakers.length > 0 && (
          <div className="border-t-2 border-black/20 pt-4">
            <h3 className="font-bold text-lg mb-3">Speakers</h3>
            <div className="flex flex-col gap-4">
              {session.speakers.map((speaker) => (
                <div className="flex flex-row items-center" key={speaker?.id}>
                  <Image
                    alt={`${speaker?.fullName} profile picture`}
                    src={speaker?.profilePicture}
                    className="w-16 h-16 min-w-16 min-h-16 rounded-full border-2 border-black object-cover aspect-square"
                    height="64"
                    width="64"
                  />
                  <div className="pl-4">
                    <p className="font-bold text-black text-lg">
                      {speaker?.fullName}
                    </p>
                    <span className="text-sm text-black/80">
                      {speaker?.tagLine}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
