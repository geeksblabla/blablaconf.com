import Image, { StaticImageData } from "next/image";
import webImage from "../images/tracks/web-mobile.png";
import backendImage from "../images/tracks/backend.png";
import secArchImage from "../images/tracks/sec-arch.png";
import bigDataImage from "../images/tracks/big-data.png";
import cloudImage from "../images/tracks/cloud.png";
import softSkillsImage from "../images/tracks/soft-skills.png";
import tracksTitle from "../images/tracks.svg";

const tracks = [
  {
    title: "Web, Mobile & UX",
    description:
      "Design and prototype faster, with an entire library of ready components.",
    image: webImage,
    day: 1,
  },
  {
    title: "Backend & Programming Languages",
    description:
      "All about programming languages, functional, reactive, emerging languages, tools, libraries, etc",
    image: backendImage,
    day: 2,
  },
  {
    title: "Security & Architecture",
    description:
      "How-Tos, strategies, tools, and best practices for getting architecture and security right.",
    image: secArchImage,
    day: 3,
  },
  {
    title: "Big Data & Machine Learning",
    description:
      "Big Data, Fast Data, NoSQL, Machine learning, Deep Learning, Neural Networks, TensorFlow, etc",
    image: bigDataImage,
    day: 4,
  },
  {
    title: "Cloud, Containers & Infrastructure",
    description:
      "Serverless, Docker, Kubernetes, Service Mesh, Cloud, PaaS, and anything in-between.",
    image: cloudImage,
    day: 5,
  },
  {
    title: "Soft Skills",
    description:
      "Emotional Intelligence, Critical Thinking, Evaluation, Mindfulness, Leadership...",
    image: softSkillsImage,
    day: 6,
  },
];

export const Tracks = () => {
  return (
    <section id="tracks" className="py-16 px-5 sm:px-20 lg:py-24">
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl">
        <Image src={tracksTitle} alt="tracks title" className="mx-auto" />
        <p className="text-center mx-auto max-w-2xl text-xl pt-6 font-bold [-webkit-text-stroke:8px_white] [paint-order:stroke_fill] pb-10">
          5 tracks covering everything you need to sharpen your IT skills.
          <br /> 1 additional track because excellence is not only about code!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <Track key={index} {...track} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

type TrackType = {
  title: string;
  description: string;
  image: StaticImageData;
  index: number;
  day: number;
};

const Track = ({ title, description, image, index, day }: TrackType) => {
  const bgColors = [
    "hover:bg-primary",
    "hover:bg-secondary",
    "hover:bg-primary",
    "hover:bg-secondary",
    "hover:bg-primary",
    "hover:bg-secondary",
  ];

  return (
    <a
      href={`/#day-${day - 1}`}
      className={`group flex flex-col rounded-[2rem] overflow-hidden border-[3px] border-black shadow-[-8px_8px_0_0_black] hover:shadow-none hover:translate-x-[-8px] hover:translate-y-[8px] transition-all duration-300 bg-white ${bgColors[index]}`}
    >
      {/* Image Container */}
      <div className="relative bg-tertiary p-6 flex items-center justify-center min-h-[180px] border-b-[3px] border-black overflow-hidden">
        {/* Day Badge */}
        <div className="absolute top-4 left-4 bg-black text-white text-sm font-bold px-3 py-1 rounded-full">
          Day {day}
        </div>

        <Image
          src={image}
          alt={title}
          className="h-[140px] w-auto object-contain  transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 flex-1">
        <h2 className="text-xl font-black text-black mb-3 leading-tight">
          {title}
        </h2>
        <p className="text-black/70 text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* View Schedule Link */}
        <div className="flex items-center gap-2 mt-4 font-bold text-black group-hover:gap-4 transition-all text-sm">
          <span>View Schedule</span>
          <svg
            width="16"
            height="16"
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
    </a>
  );
};
