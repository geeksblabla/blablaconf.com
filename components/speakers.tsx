import Image from "next/image";

import type {
  Speaker as SpeakerType,
  SpeakerLink as SpeakerLinkType,
} from "@/utils/sessionize";
import Link from "next/link";

export const Speakers = ({ speakers }: { speakers: SpeakerType[] }) => {
  return (
    <section
      id="speakers"
      className="bg-[#7D5842]  mx-auto py-16 text-white bg-gradient-to-r from-[#7C5741] to-[#B28367] overflow-hidden"
    >
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
          <clipPath id="test3" clipPathUnits="objectBoundingBox">
            <path d="M1,0.485 C1,0.485,0.992,0.487,0.991,0.479 C0.986,0.478,0.984,0.477,0.983,0.474 C0.983,0.472,0.983,0.465,0.965,0.46 C0.962,0.459,0.965,0.458,0.96,0.457 C0.956,0.455,0.933,0.448,0.929,0.443 C0.928,0.436,0.978,0.388,0.978,0.341 C0.978,0.293,0.933,0.274,0.933,0.274 C0.933,0.274,0.967,0.243,0.945,0.205 C0.922,0.168,0.845,0.173,0.845,0.173 C0.845,0.173,0.892,0.113,0.788,0.083 C0.743,0.07,0.696,0.08,0.658,0.095 C0.614,0.035,0.513,0.028,0.5,0 C0.487,0.028,0.386,0.035,0.342,0.095 C0.304,0.08,0.257,0.07,0.212,0.083 C0.108,0.113,0.155,0.173,0.155,0.173 C0.155,0.173,0.078,0.168,0.055,0.205 C0.033,0.243,0.067,0.274,0.067,0.274 C0.067,0.274,0.022,0.293,0.022,0.341 C0.022,0.388,0.072,0.436,0.071,0.443 C0.067,0.448,0.044,0.455,0.04,0.457 C0.035,0.458,0.038,0.459,0.035,0.46 C0.017,0.465,0.017,0.472,0.017,0.474 C0.016,0.477,0.014,0.478,0.009,0.479 C0.008,0.487,0,0.485,0,0.485 L0,0.939 C0,0.973,0.046,1,0.103,1 H0.5 H0.897 C0.954,1,1,0.973,1,0.939 L1,0.485" />
          </clipPath>
        </defs>
      </svg>
      <div className="relative bg-[#825C45]/6 mx-auto max-w-lg md:max-w-screen-xl my-5">
        <div className="absolute bg-[url('/images/pattern-black.svg')] bg-contain bg-repeat top-0 bottom-0 w-[200vh]" />
        <div className="flex flex-row items-center md:px-8 px-4 py-4">
          <div className="flex flex-row ">
            <h1 className="text-4xl sm:text-6xl font-bold  capitalize mb-3 mr-6  z-10">
              Speakers
            </h1>
          </div>

          <p className="text-lg font-medium leading-6  max-w-[650px]  z-10 ">
            CEOs, rock star developers, beginners and students, everyone has a
            place to share content in BlaBlaConf
          </p>
        </div>
      </div>
      <div className="mx-auto grid  gap-x-8 gap-y-12 px-4  pt-8 max-w-lg md:max-w-screen-xl md:grid-cols-3 md:px-8 lg:grid-cols-4 mt-8">
        {speakers.map((speaker: SpeakerType, index: number) => (
          <Speaker {...speaker} key={speaker.fullName} index={index} />
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
  index = 0,
}: SpeakerType & { index: number }) => {
  return (
    <div
      data-sal="slide-right"
      data-sal-delay={`${(index % 4) * 50}`}
      data-sal-duration="500"
    >
      <Link href={`/#speaker-session-${id}`}>
        <div className="rounded-4xl group relative h-[19.5rem] w-[16rem] transform overflow-hidden rounded-md ">
          <div className="rounded-4xl absolute top-0 left-0 right-4  rounded-md bottom-6  transition duration-300 group-hover:scale-95 xl:right-6"></div>
          <div
            className="absolute inset-0 bg-indigo-50"
            style={{ clipPath: "url(#test3)" }}
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
        <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white">
          {fullName}
        </h3>
        <p className="mt-1 text-base text-gray-50">{tagLine}</p>
      </Link>
      <Links links={links} />
    </div>
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
    className="pr-2 cursor-pointer text-white "
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
