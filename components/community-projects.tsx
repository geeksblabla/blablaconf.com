import Image, { StaticImageData } from "next/image";

import gSrc from "../images/projects/geeksblabla.png";
import stateSrc from "../images/projects/stateofdev.png";
import awesomeSrc from "../images/projects/awesome-morocco.png";
import moreTitle from "../images/titles/discover-more.svg";
import Link from "next/link";

type ProjectType = {
  name: string;
  description: string;
  url: string;
  image: StaticImageData;
  index: number;
};

const projects = [
  {
    name: "Geeksblabla",
    url: "https://geeksblabla.io",
    image: gSrc,
    description:
      "GeeksBlaBla is a community initiative, to discuss, highlight and share the latest IT topics in Moroccan Darija.",
  },
  {
    name: "State Of Dev in Morocco",
    url: "https://stateofdev.ma",
    image: stateSrc,
    description:
      "The annual survey on Software Developers in Morocco to provide data on the tech community and their professional paths",
  },
  {
    name: "Awesome Moroccan",
    url: "https://awesome-morocco.dev",
    image: awesomeSrc,
    description:
      "List of awesome Moroccan things for developers. Communities, Events, Blogs, Podcasts, Youtube Channels, Open Source Projects, Books and more",
  },
];

export const CommunityProjects = () => {
  return (
    <section
      className="py-16 px-5 sm:px-20 lg:py-24"
      id="community-initiatives"
    >
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl">
        <Image
          src={moreTitle}
          alt="Discover More"
          width={0}
          height={170}
          className="mx-auto"
        />
        <p
          className="text-center mx-auto max-w-2xl text-xl pt-6 font-bold [-webkit-text-stroke:8px_white] [paint-order:stroke_fill] pb-6"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="500"
        >
          BlaBlaConf is our yearly show, where we get together and celebrate the
          achievement of the Moroccan community. Of the same DNA, find here more
          community initiatives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {projects.map((project, index) => (
            <Project {...project} key={`project-${index}`} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Project = ({ name, image, url, description, index }: ProjectType) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      data-sal="zoom-in"
      data-sal-duration="800"
      data-sal-delay={index * 100}
      className="group flex flex-col rounded-[2rem] overflow-hidden border-[3px] border-black shadow-[-8px_8px_0_0_black] hover:shadow-none hover:translate-x-[-8px] hover:translate-y-[8px] transition-all duration-300 bg-white hover:bg-tertiary"
    >
      {/* Image Container */}
      <div className="bg-tertiary p-6 flex items-center justify-center min-h-[180px] border-b-3 border-black">
        <Image
          src={image}
          alt={name}
          width={180}
          height={100}
          className="object-contain max-h-[120px]  transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 flex-1">
        <h2 className="text-2xl font-black text-black mb-3">{name}</h2>
        <p className="text-black/80 text-base leading-relaxed flex-1">
          {description}
        </p>

        {/* Visit Link */}
        <div className="flex items-center gap-2 mt-4 font-bold text-black group-hover:gap-4 transition-all">
          <span>Visit</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </Link>
  );
};
