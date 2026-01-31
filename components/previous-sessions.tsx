import Image, { StaticImageData } from "next/image";

import lastEditionTitle from "../images/titles/last-editions.svg";
import Link from "next/link";

const lastEditionSessions = [
  {
    title: "2025 Technofna",
    url: "https://www.youtube.com/watch?v=NNHb4YaUzsc&list=PLUa7iphNQNrwpxtHT3hJcgMBG1Ujft7CF",
    thumbnail: "https://img.youtube.com/vi/NNHb4YaUzsc/maxresdefault.jpg",
    isNew: true,
  },
  {
    title: "2024 So9 Tech",
    url: "https://www.youtube.com/watch?v=a2o74IO59gE&list=PLUa7iphNQNrzhWEJlEooj79kPkm3LUUYy",
    thumbnail: "https://img.youtube.com/vi/a2o74IO59gE/maxresdefault.jpg",
  },
  {
    title: "2022 Moussem Tech",
    url: "https://www.youtube.com/watch?v=XFb24kcdSKk&list=PLUa7iphNQNrwuQVs4qk_TCo5X-2cFQkGF",
    thumbnail: "https://img.youtube.com/vi/XFb24kcdSKk/maxresdefault.jpg",
  },
  {
    title: "2021 BlaBlaConf 2.0",
    url: "https://www.youtube.com/watch?v=FpfjDt-Tn3M&list=PLUa7iphNQNrym6RNNslh3IzQRxuoTqzJM",
    thumbnail: "https://img.youtube.com/vi/FpfjDt-Tn3M/maxresdefault.jpg",
  },
  {
    title: "2020 BlaBlaConf 1.0",
    url: "https://www.youtube.com/watch?v=plsrbwBxR74&list=PLUa7iphNQNrxNuo9GN367QbhyD7crSDGp&index=1",
    thumbnail: "https://img.youtube.com/vi/plsrbwBxR74/maxresdefault.jpg",
  },
];

export const PreviousSessions = () => {
  return (
    <section id="last-sessions" className="py-16 px-5 sm:px-20 lg:py-24">
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl">
        <div className="title-style leading-[0.8]">
          <span className="mx-auto text-primary">شنو كان؟</span>
          <span className="mx-auto text-secondary">Previous Editions</span>
        </div>
        <p
          className="text-center mx-auto max-w-2xl text-xl pt-6 font-bold [-webkit-text-stroke:8px_white] [paint-order:stroke_fill] pb-6"
          ata-sal="fade"
          data-sal-delay="100"
          data-sal-duration="500"
        >
          This is the 5th edition of BlaBLaConf, Make sure to watch the last
          years sessions, and get a sneak peek of what BlaBLaConf Conference
          would be like.
        </p>

        {/* Edition Videos Grid */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {lastEditionSessions.map((session, index) => (
            <div
              key={`edition-${index}`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay={index * 100}
            >
              <EditionVideo
                title={session.title}
                url={session.url}
                thumbnail={session.thumbnail}
                isNew={session.isNew}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EditionVideo = ({
  title,
  url,
  thumbnail,
  isNew,
}: {
  title: string;
  url: string;
  thumbnail: string;
  isNew?: boolean;
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col rounded-[2rem] overflow-hidden border-[3px] border-black shadow-[-8px_8px_0_0_black] hover:shadow-none hover:translate-x-[-8px] hover:translate-y-[8px] transition-all duration-300 bg-white"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300"
          unoptimized
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-3 border-black shadow-[-4px_4px_0_0_black] group-hover:shadow-none group-hover:translate-x-[-4px] group-hover:translate-y-[4px] transition-all duration-300">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-black ml-1"
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      </div>

      {/* Title Bar */}
      <div className="p-4 border-t-3 border-black">
        <h3 className="font-black text-black text-lg text-center gap-4 flex justify-center items-center">
          {title}
          {isNew && (
            <span className="bg-primary text-sm font-bold px-3 py-1 rounded-full">
              Latest
            </span>
          )}
        </h3>
      </div>
    </Link>
  );
};
