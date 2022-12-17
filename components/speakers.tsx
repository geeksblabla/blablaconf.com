import Image from "next/image";

import type {
  Speaker as SpeakerType,
  SpeakerLink as SpeakerLinkType,
} from "@/utils/sessionize";
import Link from "next/link";

export const Speakers = ({ speakers }: { speakers: SpeakerType[] }) => {
  return (
    <section id="speakers" className="bg-blue-50/50 mx-auto py-16">
      <svg aria-hidden="true" width="0" height="0">
        <defs>
          <clipPath id=":R9m:-0" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 h 0.729 v 0.129 h 0.121 l -0.016 0.032 C 0.815 0.198 0.843 0.243 0.885 0.243 H 1 v 0.757 H 0.271 v -0 l -0.271 0 v -0.057 H 0 V 0"></path>
          </clipPath>
          <clipPath id=":R9m:-1" clipPathUnits="objectBoundingBox">
            <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7"></path>
          </clipPath>
          <clipPath id=":R9m:-2" clipPathUnits="objectBoundingBox">
            <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0"></path>
          </clipPath>
        </defs>
      </svg>
      <div className="mx-auto max-w-lg md:max-w-screen-xl flex flex-col md:px-8 px-4">
        <div className="flex flex-row ">
          <Image
            height={44}
            width={44}
            src="/images/tarbouch.png"
            className="w-10 h-10 self-center -mt-3 mr-2"
            alt="Tarbouch"
          />
          <h1 className="text-4xl sm:text-5xl font-bold  capitalize mb-3">
            Speakers
          </h1>
        </div>

        <p className="text-lg font-medium text-gray-600 leading-normal max-w-[650px]">
          CEOs, rock star developers, beginners and students, everyone has a
          place to share content in BlaBlaConf
          <br />
          <br />
        </p>
      </div>
      <div className="mx-auto grid  gap-x-8 gap-y-12 px-4  pt-8 max-w-lg md:max-w-screen-xl md:grid-cols-3 md:px-8 lg:grid-cols-4">
        {speakers.map((speaker: SpeakerType) => (
          <Speaker {...speaker} key={speaker.fullName} />
        ))}
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
}: SpeakerType) => {
  return (
    <>
      <div>
        <div className="rounded-4xl group relative h-[17.5rem] transform overflow-hidden rounded-md ">
          <div className="rounded-4xl absolute top-0 left-0 right-4  rounded-md bottom-6  transition duration-300 group-hover:scale-95 xl:right-6"></div>
          <div
            className="absolute inset-0 bg-indigo-50"
            style={{ clipPath: "url(#:R9m:-0)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="session 1"
              width="1120"
              height="560"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
              //   style="color:transparent"
              src={profilePicture}
            />
          </div>
        </div>
        <h3 className="font-display mt-4 text-xl font-bold tracking-tight text-slate-900">
          {fullName}
        </h3>
        <p className="mt-1 text-sm text-slate-500">{tagLine}</p>
        <Links links={links} />
      </div>
    </>
  );
};

export const Links = ({ links }: { links: SpeakerLinkType[] }) => (
  <ul className="list-inside flex py-2 text-slate-500">
    {links
      .filter(
        (link) => link.linkType === "Twitter" || link.linkType === "LinkedIn"
      )
      .map((link, index) => (
        <SocialLink href={link.url} type={link.linkType} key={`link${index}`} />
      ))}
  </ul>
);

const SocialLink = ({
  href,
  type,
}: {
  href: string;
  type: "Twitter" | "LinkedIn";
}) => (
  <a
    href={href}
    className="pr-2 cursor-pointer "
    target="_blank"
    rel="noreferrer"
  >
    {type === "Twitter" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5 h-5 hover:text-blue-400"
      >
        <path
          fill="currentColor"
          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-5 h-5 hover:text-blue-800"
      >
        <path
          fill="currentColor"
          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
        />
      </svg>
    )}
  </a>
);
