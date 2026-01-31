"use client";

import type { Session as SessionType } from "@/utils/sessionize";
import { SessionTime } from "../session-time";
import { SpeakerAvatar } from "../speaker-avatar";

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
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-secondary border-2 border-black shadow-[-3px_3px_0_0_black] hover:shadow-none hover:translate-x-[-3px] hover:translate-y-[3px] transition-all duration-100"
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

        {/* Speakers - at the top */}
        {session.speakers && session.speakers.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-col gap-4">
              {session.speakers.map((speaker) => (
                <div className="flex flex-row items-center" key={speaker?.id}>
                  <SpeakerAvatar
                    fullName={speaker?.fullName}
                    profilePicture={speaker?.profilePicture}
                    size="lg"
                  />
                  <div className="pl-4">
                    <p className="font-bold text-black text-xl">
                      {speaker?.fullName}
                    </p>
                    <span className="text-sm text-black/70">
                      {speaker?.tagLine}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Session Title */}
        <h2 className="text-2xl md:text-3xl font-bold pr-12 mb-4">
          {session.title}
        </h2>

        {/* Description */}
        {session.description && (
          <p className="text-black/80 mb-4 whitespace-pre-wrap">
            {session.description}
          </p>
        )}

        {/* Time - at the bottom */}
        <div dir="rtl">
          <SessionTime session={session} />
        </div>
      </div>
    </div>
  );
};
