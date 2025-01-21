import Image, { StaticImageData } from "next/image";

import session1Src from "../images/sessions/session-1.png";
import session2Src from "../images/sessions/session-2.png";
import session3Src from "../images/sessions/session-3.png";
import lastEditionTitle from "../images/titles/last-edition.png";

// TODO
const sessions = [
  {
    image: session1Src,
    url: "https://www.youtube.com/watch?v=FQGVka9AnF4",
  },
  {
    image: session2Src,
    url: "https://www.youtube.com/watch?v=gm0NZV5x2bg",
  },
  {
    image: session3Src,
    url: "https://www.youtube.com/watch?v=AysuFKXk6AY",
  },
];

const lastEditionSessions = [
  {
    title: "2024 So9 tech",
    url: "https://www.youtube.com/watch?v=a2o74IO59gE&list=PLUa7iphNQNrzhWEJlEooj79kPkm3LUUYy",
  },
  {
    title: "2022 Moussem tech",
    url: "https://www.youtube.com/watch?v=XFb24kcdSKk&list=PLUa7iphNQNrwuQVs4qk_TCo5X-2cFQkGF",
  },
  {
    title: "2021 BlaBlaConf 2.0",
    url: "https://www.youtube.com/watch?v=FpfjDt-Tn3M&list=PLUa7iphNQNrym6RNNslh3IzQRxuoTqzJM",
  },
  {
    title: "2020 BlaBlaConf 1.0",
    url: "https://www.youtube.com/watch?v=plsrbwBxR74&list=PLUa7iphNQNrxNuo9GN367QbhyD7crSDGp",
  },
];

export const PreviousSessions = () => {
  return (
    <section id="last-sessions" className="py-16 bg-[#53925E] text-white">
      <div className="mx-auto max-w-lg px-4 md:max-w-screen-xl text-center">
        <div className="mx-auto ">
          <Image
            src={lastEditionTitle}
            alt="last edition title"
            className="mx-auto md:max-h-[140px] max-h-[120px] object-contain"
          />
          <p
            className="my-6 text-base text-center  font-[400]  leading-normal max-w-[450px] mx-auto "
            ata-sal="fade"
            data-sal-delay="100"
            data-sal-duration="500"
          >
            This is the 5th edition of BlaBlaConf, Make sure to watch the last
            years sessions, and get a sneak peek of what BlaBLaConf Conference
            would be like.
          </p>
        </div>

        <ul className="mt-16 mx-auto font-extrabold w-full text-center text-xl  grid  gap-x-8 gap-y-12 px-4  md:max-w-screen-lg md:grid-cols-1 md:px-8 lg:grid-cols-4">
          {lastEditionSessions.map((session, index) => (
            <li key={`session-${index}`}>
              <a href={session.url} target="_blank" rel="noreferrer">
                {session.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const Session = ({
  src,
  url,
  index,
}: {
  src: StaticImageData;
  url: string;
  index: number;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className="shadow-md  mx-auto rounded-2xl relative w-fit cursor-pointer overflow-hidden hover:scale-105 transition-all duration-200"
      rel="noreferrer"
      data-sal="slide-right"
      data-sal-delay={`${index * 100}`}
      data-sal-duration="500"
    >
      <Image src={src} alt="session 1" />
      <div className="absolute top-0 h-ful bottom-0 w-full  flex justify-center items-center  ">
        <svg
          width="60"
          height="60"
          viewBox="0 0 86 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_493_1153)">
            <circle cx="43" cy="43" r="43" fill="white" fillOpacity="0.8" />
          </g>
          <path
            d="M54.7577 45.8282L41.2188 54.8541C38.5606 56.6263 35 54.7207 35 51.5259V33.4741C35 30.2793 38.5606 28.3737 41.2188 30.1459L54.7577 39.1718C57.1326 40.7551 57.1326 44.2449 54.7577 45.8282Z"
            fill="#A2765D"
          />
          <defs>
            <filter
              id="filter0_b_493_1153"
              x="-14"
              y="-14"
              width="114"
              height="114"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="7" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_493_1153"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_493_1153"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </a>
  );
};
