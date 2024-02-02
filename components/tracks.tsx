import Image, { StaticImageData } from "next/image";
import webImage from "../images/tracks/web-mobile.png";
import backendImage from "../images/tracks/backend.png";
import secArchImage from "../images/tracks/sec-arch.png";
import bigDataImage from "../images/tracks/big-data.png";
import cloudImage from "../images/tracks/cloud.png";
import softSkillsImage from "../images/tracks/soft-skills.png";
const tracks = [
  {
    title: "Web, \n mobile & UX",
    description:
      "Design and prototype faster, with an entire library of ready components.",
    image: webImage,
    tooltip: " بذوق فريد من اعماق تقافتنا",
  },
  {
    title: "Backend Technologies & \n Programming languages",
    description:
      "All about programming languages, functional, reactive, emerging languages, tools, libraries, etc",
    image: backendImage,
    tooltip: " بذوق فريد من اعماق تقافتنا",
  },
  {
    title: "Security & \n Architecture",
    description:
      "How-Tos, strategies, tools, and best practices for getting architecture and security right.",
    image: secArchImage,
    tooltip: " بذوق فريد من اعماق تقافتنا",
  },
  {
    title: "Big Data &\n Machine Learning",
    description:
      "Big Data, Fast Data, NoSQL, Machine learning, Deep Learning, Neural Networks, TensorFlow, etc",
    image: bigDataImage,
    tooltip: " بذوق فريد من اعماق تقافتنا",
  },
  {
    title: "Cloud, Containers &\n Infrastructure",
    description:
      "Serverless, Docker, Kubernetes, Service Mesh, Cloud, PaaS, and anything in-between.",
    image: cloudImage,
    tooltip: " بذوق فريد من اعماق تقافتنا",
  },
  {
    title: "Soft\n Skills",
    description:
      "Emotional Intelligence, Critical Thinking, Evaluation, Mindfulness, Leadership...",
    image: softSkillsImage,
    tooltip: " بذوق فريد من اعماق تقافتنا",
  },
];

export const Tracks = () => {
  return (
    <section id="tracks" className="py-16">
      <div className="mx-auto max-w-screen-xl mb-10 pt-8 md:mb-16 md:px-8 px-4">
        <h2
          className="mb-4 text-6xl font-bold md:mb-6 md:text-7xl capitalize text-center text-gradient"
          ata-sal="fade"
          data-sal-delay="100"
          data-sal-duration="500"
        >
          5 + 1 Tracks
        </h2>
        <p
          className="mb-12 text-xl text-center font-[400] text-[#282828] leading-normal max-w-[650px] mx-auto "
          ata-sal="fade"
          data-sal-delay="100"
          data-sal-duration="500"
        >
          5 tracks covering everything you need to sharpen your IT skills. 1
          additional track because excellence is not only about code!
        </p>
      </div>
      <div className="mx-auto  grid max-w-screen-xl grid-cols-1 gap-6 py-6  sm:px-6 md:grid-cols-2 lg:grid-cols-3 md:px-8 px-4">
        {tracks.map((track, index) => (
          <Track key={index} {...track} index={index} />
        ))}
      </div>
    </section>
  );
};

type TrackType = {
  title: string;
  description: string;
  image: StaticImageData;
  index: number;
  tooltip: string;
};

const Track = ({ title, description, image, index, tooltip }: TrackType) => {
  const titleStr = title.split("\n").map((str, index) => (
    <span key={index} className="block">
      {str}
    </span>
  ));
  return (
    <a
      href={`/#day-${index}`}
      className="rounded-xl  p-3  cursor-pointer group flex flex-col items-center"
    >
      <div className="w-fit relative items-center justify-center overflow-visible rounded-xl  bg-[url('/images/t-back.svg')] bg-contain  bg-no-repeat bg-center">
        {/* <div className="absolute  bottom-0 left-0 top-0 w-full h-full z-10  rounded-xl flex">
          <span className="track-tooltip absolute " data-tooltip={tooltip} />
        </div> */}
        <Image
          height={200}
          width={200}
          src={image}
          alt="track photo"
          className=" transition duration-300 group-hover:animate-swing origin-bottom"
          data-sal="fade"
          data-sal-delay={`${index * 100}`}
          data-sal-duration="400"
        />
      </div>

      <div
        className="mt-1 p-2 max-w-[330px] mx-auto"
        data-sal="fade"
        data-sal-delay={`${index * 100}`}
        data-sal-duration="500"
      >
        <h2 className="text-2xl font-bold capitalize text-center text-gradient leading-tight">
          {titleStr}
        </h2>
        <p className="text-center w-full mt-1 text-sm font-medium leading-tight text-gray-600 capitalize pt-2 max-w-[300px] ">
          {description}
        </p>
      </div>
    </a>
  );
};
