"use client";

import Image from "next/image";

import type {
  Speaker as SpeakerType,
  SpeakerLink as SpeakerLinkType,
} from "@/utils/sessionize";
import speakersTitle from "../images/speakers.svg";

export const Speakers = ({ speakers }: { speakers: SpeakerType[] }) => {
  return (
    <section id="speakers" className="py-16 px-5 sm:px-20 lg:py-24">
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl">
        <Image src={speakersTitle} alt="speakers title" className="mx-auto" />
        <p className="text-center mx-auto max-w-2xl text-xl pt-6 font-bold [-webkit-text-stroke:8px_white] [paint-order:stroke_fill] pb-10">
          CEOs, rock star developers, beginners and students, everyone has a
          place to share content in BlaBlaConf
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker: SpeakerType, index: number) => (
            <Speaker {...speaker} key={speaker.id} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Speaker = ({
  profilePicture,
  fullName,
  tagLine,
  links,
  id,
  index = 0,
}: SpeakerType & { index: number }) => {
  const rotations = [
    "-rotate-2",
    "-rotate-1",
    "rotate-0",
    "rotate-1",
    "rotate-2",
  ];
  const rotation = rotations[index % rotations.length];

  return (
    <div
      className={`${rotation} hover:rotate-0 group flex flex-col bg-white hover:bg-primary rounded-[2rem] overflow-hidden border-[3px] border-black shadow-[-6px_6px_0_0_black] hover:shadow-none hover:translate-x-[-6px] hover:translate-y-[6px] transition-all duration-300`}
    >
      <a href={`/#speaker-session-${id}`}>
        {/* Image Container - Clickable */}
        <div className="relative aspect-square overflow-hidden border-b-[3px] border-black">
          <Image
            alt={`${fullName} profile picture`}
            width={400}
            height={400}
            className="w-full h-full object-cover"
            src={profilePicture}
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-black text-black text-base md:text-lg leading-tight">
            {fullName}
          </h3>
          <p className="text-black/70 text-xs md:text-sm mt-1 line-clamp-2 flex-1">
            {tagLine}
          </p>

          {/* Social Links */}
          <div className="flex gap-2 mt-3">
            {links
              .filter(
                (link) =>
                  link.linkType === "Twitter" || link.linkType === "LinkedIn",
              )
              .map((link, idx) => (
                <SocialLink
                  href={link.url}
                  type={link.linkType}
                  key={`${id}-link-${idx}`}
                />
              ))}
          </div>
        </div>
      </a>
    </div>
  );
};

const SocialLink = ({
  href,
  type,
}: {
  href: string;
  type: "Twitter" | "LinkedIn";
}) => (
  <a
    href={href}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black text-black hover:text-white transition-all duration-300"
    target="_blank"
    rel="noreferrer"
  >
    {type === "Twitter" ? (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    )}
  </a>
);

export const Links = ({ links }: { links: SpeakerLinkType[] }) => (
  <div className="flex gap-2">
    {links
      .filter(
        (link) => link.linkType === "Twitter" || link.linkType === "LinkedIn",
      )
      .map((link, idx) => (
        <SocialLink href={link.url} type={link.linkType} key={`link-${idx}`} />
      ))}
  </div>
);
