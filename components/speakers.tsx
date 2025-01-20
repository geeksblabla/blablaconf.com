import Image from "next/image";

import type {
  Speaker as SpeakerType,
  SpeakerLink as SpeakerLinkType,
} from "@/utils/sessionize";
import speakersTitle from "../images/titles/speakers.png";
import Link from "next/link";

export const Speakers = ({ speakers }: { speakers: SpeakerType[] }) => {
  return (
    <section
      id="speakers"
      className="bg-[#53925E]  mx-auto py-16 text-white   overflow-hidden"
    >
      <div className="mx-auto ">
        <Image
          src={speakersTitle}
          alt="speakers title"
          className="mx-auto md:max-h-[160px] max-h-[120px] object-contain"
        />
        <p className="text-base text-center font-medium leading-6  max-w-[450px]  z-10 pr-2 mx-auto px-6 ">
          CEOs, rock star developers, beginners and students, everyone has a
          place to share content in BlaBlaConf
        </p>
      </div>
      <div className="mx-auto grid grid-cols-2 gap-x-4 gap-y-12 px-4 pt-8 max-w-lg md:max-w-screen-xl md:grid-cols-3 md:gap-x-8 md:px-8 lg:grid-cols-4 mt-8">
        {speakers.map((speaker: SpeakerType, index: number) => (
          <Speaker {...speaker} key={speaker.fullName} index={index} />
        ))}
      </div>
    </section>
  );
};

const tapePositions = [
  "-right-4 md:-top-6 rotate-90 -top-4",
  "left-[44%] md:-top-[42px] -top-[30px] rotate-[30deg]",
  "-left-2 md:-top-8 -top-4",
];

const stickPositions = [
  "right-2 md:-top-4 -top-1",
  "left-[44%] md:-top-[32px] -top-[20px]",
  "-left-3 md:-top-4 -top-1 -rotate-[50deg]",
];

const tapeColors = ["text-white", "text-[#D35747]", "text-[#E7B041]"];

const cardRotation = [
  "rotate-[-3deg]",
  "rotate-[-2deg]",
  "rotate-[-1deg]",
  "rotate-0",
  "rotate-[1deg]",
  "rotate-[2deg]",
  "rotate-[3deg]",
];

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
      data-sal="slide-up"
      data-sal-delay={`${(index % 4) * 50}`}
      data-sal-duration="500"
      className="mx-auto group"
    >
      <Link href={`/#speaker-session-${id}`}>
        {/* Updated image container */}
        <div
          className={`mx-auto relative h-[14rem] w-[11rem] md:h-[19.5rem] md:w-[16rem] transform transition duration-300 ${
            cardRotation[index % cardRotation.length]
          } group-hover:rotate-0`}
        >
          {/* Image container with updated styling */}
          <div className="relative h-full w-full rounded-3xl bg-white p-2 md:p-3 shadow-lg">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                alt={`${fullName} profile picture`}
                width="400"
                height="400"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                src={profilePicture}
              />
            </div>
          </div>

          {Math.random() < 0.5 ? (
            <div
              className={`absolute ${
                tapePositions[Math.floor(Math.random() * tapePositions.length)]
              } w-4 h-1.5 md:w-8 md:h-2  ${
                tapeColors[Math.floor(Math.random() * tapeColors.length)]
              }`}
            >
              <Tape />
            </div>
          ) : (
            <div
              className={`absolute ${
                stickPositions[
                  Math.floor(Math.random() * stickPositions.length)
                ]
              } w-4 h-1.5 md:w-8 md:h-2  ${
                tapeColors[Math.floor(Math.random() * tapeColors.length)]
              }`}
            >
              <Stick />
            </div>
          )}
        </div>

        {/* Rest of the component remains unchanged */}
        <div className="text-center">
          <h3 className="font-cairo mt-4 text-xl md:text-2xl font-bold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            {fullName}
          </h3>
          <p className="mt-1 text-sm md:text-base text-gray-50 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            {tagLine}
          </p>
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
    className="pr-2 cursor-pointer drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
    target="_blank"
    rel="noreferrer"
  >
    {type === "Twitter" ? (
      <svg
        viewBox="0 0 22 22"
        className="w-[24px] h-[24px] p-1 hover:scale-125 transition-all duration-300"
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
        className="w-[25px] h-[25px] p-1 hover:scale-125 transition-all duration-300"
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

const Tape = () => {
  return (
    <svg
      viewBox="0 0 70 67"
      fill="none"
      className="md:w-[70px] md:h-[67px] w-[50px] h-[49px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.2929 65.7929L1.67827 20.1783C1.56126 20.0613 1.47511 19.917 1.42755 19.7585L0.471852 16.5728C0.256587 15.8553 0.877657 15.1646 1.61397 15.3026L6.81571 16.2779C7.43113 16.3933 8 15.9212 8 15.2951V12.5C8 11.9477 8.44771 11.5 9 11.5H14C14.5523 11.5 15 11.0523 15 10.5V8.2198C15 7.58876 15.5773 7.11547 16.1961 7.23922L21.3039 8.26078C21.9227 8.38453 22.5 7.91124 22.5 7.2802V1.41421C22.5 0.523309 23.5771 0.0771418 24.2071 0.707107L68.7929 45.2929C69.4229 45.9229 68.9767 47 68.0858 47H63.284C62.4122 47 61.9579 48.0377 62.5492 48.6783L65.0931 51.4342C65.7313 52.1256 65.1483 53.2355 64.2169 53.1024L55.3304 51.8329C54.457 51.7081 53.8617 52.6931 54.3783 53.4083L58.1217 58.5917C58.6383 59.3069 58.043 60.2919 57.1696 60.1671L50.1414 59.1631C49.539 59.077 49 59.5445 49 60.153V65.0858C49 65.9767 47.9229 66.4229 47.2929 65.7929Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Stick = () => {
  return (
    <svg
      width="56"
      height="63"
      viewBox="0 0 56 63"
      className="md:w-[56px] md:h-[63px] w-[40px] h-[49px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.1343 51.9722C34.4748 54.51 31.4344 55.9279 27.6936 56.0322C23.9574 56.1364 19.6233 54.916 15.6125 52.2933C11.6016 49.6706 8.74583 46.1895 7.34315 42.725C5.93879 39.2563 6.01855 35.9025 7.67806 33.3646C9.33757 30.8267 12.378 29.4089 16.1188 29.3046C19.855 29.2004 24.1891 30.4208 28.1999 33.0435C32.2108 35.6662 35.0665 39.1473 36.4692 42.6118C37.8736 46.0805 37.7938 49.4343 36.1343 51.9722Z"
        fill="#061431"
        stroke="#061431"
        strokeWidth="2"
      />
      <path d="M17.5005 51L12.5005 59" stroke="#061431" strokeWidth="4" />
      <path
        d="M39.1449 47.3692C37.4001 50.0374 34.2754 51.5502 30.4922 51.7258C26.7106 51.9013 22.3531 50.7268 18.3494 48.1088C14.3456 45.4907 11.5225 41.9697 10.167 38.4351C8.81088 34.899 8.94386 31.4298 10.6886 28.7616C12.4333 26.0934 15.5581 24.5806 19.3413 24.405C23.1228 24.2295 27.4804 25.404 31.4841 28.022C35.4878 30.64 38.311 34.161 39.6665 37.6956C41.0226 41.2318 40.8896 44.701 39.1449 47.3692Z"
        fill="currentColor"
        stroke="#061431"
        strokeWidth="2"
      />
      <path
        d="M22.8929 31.3635L29.6847 20.977L38.3053 26.614L31.5135 37.0005C29.9569 39.381 26.7652 40.0489 24.3847 38.4923C22.0042 36.9357 21.3363 33.744 22.8929 31.3635Z"
        fill="currentColor"
        stroke="#061431"
        strokeWidth="2"
      />
      <path
        d="M47.9849 24.3304C46.8367 26.0863 44.7358 27.1002 42.1113 27.1933C39.49 27.2863 36.4391 26.4467 33.6144 24.5996C30.7898 22.7526 28.7973 20.2943 27.8314 17.8557C26.8644 15.414 26.9508 13.0829 28.099 11.327C29.2472 9.57114 31.348 8.55724 33.9725 8.46414C36.5938 8.37115 39.6448 9.21076 42.4694 11.0578C45.2941 12.9049 47.2866 15.3631 48.2524 17.8018C49.2195 20.2434 49.1331 22.5745 47.9849 24.3304Z"
        fill="#061431"
        stroke="#061431"
        strokeWidth="2"
      />
      <path
        d="M50.0591 21.1586C48.9109 22.9144 46.81 23.9283 44.1855 24.0214C41.5642 24.1144 38.5133 23.2748 35.6886 21.4278C32.864 19.5807 30.8715 17.1224 29.9056 14.6838C28.9386 12.2422 29.025 9.91103 30.1732 8.15515C31.3214 6.39926 33.4223 5.38536 36.0468 5.29226C38.6681 5.19928 41.719 6.03889 44.5437 7.88593C47.3683 9.73298 49.3608 12.1913 50.3267 14.6299C51.2937 17.0715 51.2073 19.4027 50.0591 21.1586Z"
        fill="currentColor"
        stroke="#061431"
        strokeWidth="2"
      />
    </svg>
  );
};
