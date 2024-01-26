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
          <clipPath id="pattern3" clipPathUnits="objectBoundingBox">
            <path d="M1,0.485 C1,0.485,0.992,0.487,0.991,0.479 C0.986,0.478,0.984,0.477,0.983,0.474 C0.983,0.472,0.983,0.465,0.965,0.46 C0.962,0.459,0.965,0.458,0.96,0.457 C0.956,0.455,0.933,0.448,0.929,0.443 C0.928,0.436,0.978,0.388,0.978,0.341 C0.978,0.293,0.933,0.274,0.933,0.274 C0.933,0.274,0.967,0.243,0.945,0.205 C0.922,0.168,0.845,0.173,0.845,0.173 C0.845,0.173,0.892,0.113,0.788,0.083 C0.743,0.07,0.696,0.08,0.658,0.095 C0.614,0.035,0.513,0.028,0.5,0 C0.487,0.028,0.386,0.035,0.342,0.095 C0.304,0.08,0.257,0.07,0.212,0.083 C0.108,0.113,0.155,0.173,0.155,0.173 C0.155,0.173,0.078,0.168,0.055,0.205 C0.033,0.243,0.067,0.274,0.067,0.274 C0.067,0.274,0.022,0.293,0.022,0.341 C0.022,0.388,0.072,0.436,0.071,0.443 C0.067,0.448,0.044,0.455,0.04,0.457 C0.035,0.458,0.038,0.459,0.035,0.46 C0.017,0.465,0.017,0.472,0.017,0.474 C0.016,0.477,0.014,0.478,0.009,0.479 C0.008,0.487,0,0.485,0,0.485 L0,0.939 C0,0.973,0.046,1,0.103,1 H0.5 H0.897 C0.954,1,1,0.973,1,0.939 L1,0.485" />
          </clipPath>
        </defs>
      </svg>
      <div className="relative bg-[#825C45]/6 mx-auto max-w-lg md:max-w-screen-xl my-5">
        <div className="absolute bg-[url('/images/pattern-black.svg')] bg-contain bg-repeat top-0 bottom-0 w-[200vh]" />
        <div className="flex md:flex-row flex-col md:items-center md:px-8 px-4 py-4">
          <div className="flex flex-row ">
            <h1 className="text-4xl sm:text-6xl font-bold capitalize mb-3 mr-6 z-10">
              {speakers.length} Speakers
            </h1>
          </div>

          <p className="text-lg font-medium leading-6  max-w-[650px]  z-10 pr-2 ">
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
      className="mx-auto"
    >
      <Link href={`/#speaker-session-${id}`}>
        <div className="mx-auto rounded-4xl group relative h-[19.5rem] w-[16rem] transform overflow-hidden rounded-md ">
          <div className="rounded-4xl absolute top-0 left-0 right-4  rounded-md bottom-6  transition duration-300 group-hover:scale-95 xl:right-6"></div>
          <div
            className="absolute inset-0 bg-indigo-50"
            style={{ clipPath: "url(#pattern3)" }}
          >
            <Image
              alt={`${fullName} profile picture`}
              width="400"
              height="400"
              className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
              src={profilePicture}
            />
          </div>
        </div>
        <div className=" text-center">
          <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white">
            {fullName}
          </h3>
          <p className="mt-1 text-base text-gray-50">{tagLine}</p>
        </div>
      </Link>
      <Links links={links} />
    </div>
  );
};

export const Links = ({ links }: { links: SpeakerLinkType[] }) => (
  <ul className="list-inside flex justify-center py-2 mx-auto">
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
    className="pr-2 cursor-pointer"
    target="_blank"
    rel="noreferrer"
  >
    {type === "Twitter" ? (
      <svg
        viewBox="0 0 22 22"
        className="w-[24px] h-[24px] p-1 hover:text-[#3a322b]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0955 9.31648L21.2864 0H19.3456L12.2303 8.08768L6.55141 0H0L8.58949 12.2311L0 22H1.94072L9.45009 13.4571L15.4486 22H22L13.0955 9.31648ZM10.4365 12.3385L9.5649 11.1198L2.64059 1.43161H5.62193L11.2117 9.25316L12.0797 10.4719L19.3447 20.6381H16.3634L10.4365 12.3385Z"
          fill="currentColor"
        />
      </svg>
    ) : (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="w-[25px] h-[25px] p-1 hover:text-[#3a322b]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.9239 0H3.0761C1.3859 0 0 1.38605 0 3.07605V20.9239C0 22.6139 1.3859 24 3.0761 24H20.9238C22.6143 24 24 22.6139 24 20.924V3.07605C24 1.38605 22.6143 0 20.9239 0ZM8.25 11.5906V19H5V12.1434V9.65H8.25V11.5906ZM6.6185 8.2564C5.71435 8.2564 4.9807 7.5233 4.9807 6.6186C4.9807 5.71375 5.71435 4.98155 6.6185 4.98155C7.5239 4.98155 8.25685 5.7138 8.25685 6.6186C8.25685 7.5233 7.52395 8.2564 6.6185 8.2564ZM19 13.9V19H16.2V14.4584C16.2 13.3708 16.0823 11.9721 14.5918 11.9721C13.0787 11.9721 12.85 13.1561 12.85 14.38V19H10.15V11.456V9.65H12.75V10.9H12.7777C13.1655 10.2 14.1156 9.649 15.5303 9.649C17.9139 9.649 18.7239 10.7761 18.9455 12.5396C18.9981 12.9535 19.0184 13.4 19.0184 13.9H19Z"
          fill="currentColor"
        />
      </svg>
    )}
  </a>
);
