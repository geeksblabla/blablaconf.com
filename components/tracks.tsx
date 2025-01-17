import Image, { StaticImageData } from "next/image";
import webImage from "../images/tracks/web-mobile.png";
import backendImage from "../images/tracks/backend.png";
import secArchImage from "../images/tracks/sec-arch.png";
import bigDataImage from "../images/tracks/big-data.png";
import cloudImage from "../images/tracks/cloud.png";
import softSkillsImage from "../images/tracks/soft-skills.png";
import tracksTitle from "../images/titles/tracks.png";
import trackTitle from "../images/titles/track.png";
const tracks = [
  {
    title: "Web,\n mobile & UX",
    description:
      "Design and prototype faster, with an entire library of ready components.",
    image: webImage,
    tooltip: " بذوق فريد من اعماق تقافتنا",
    textSize: "text-2xl",
  },
  {
    title: "Backend Technologies & \n Programming languages",
    description:
      "All about programming languages, functional, reactive, emerging languages, tools, libraries, etc",
    image: backendImage,
    tooltip: " بذوق فريد من اعماق تقافتنا",
    textSize: "text-xl",
  },
  {
    title: "Security & \n Architecture",
    description:
      "How-Tos, strategies, tools, and best practices for getting architecture and security right.",
    image: secArchImage,
    tooltip: " بذوق فريد من اعماق تقافتنا",
    textSize: "text-2xl",
  },
  {
    title: "Big Data &\n Machine Learning",
    description:
      "Big Data, Fast Data, NoSQL, Machine learning, Deep Learning, Neural Networks, TensorFlow, etc",
    image: bigDataImage,
    tooltip: " بذوق فريد من اعماق تقافتنا",
    textSize: "text-2xl",
  },
  {
    title: "Cloud, Containers &\n Infrastructure",
    description:
      "Serverless, Docker, Kubernetes, Service Mesh, Cloud, PaaS, and anything in-between.",
    image: cloudImage,
    tooltip: " بذوق فريد من اعماق تقافتنا",
    textSize: "text-2xl",
  },
  {
    title: "Soft \n Skills",
    description:
      "Emotional Intelligence, Critical Thinking, Evaluation, Mindfulness, Leadership...",
    image: softSkillsImage,
    tooltip: " بذوق فريد من اعماق تقافتنا",
    textSize: "text-3xl",
  },
];

export const Tracks = () => {
  return (
    <section id="tracks" className="py-16">
      <div className="mx-auto max-w-screen-xl mb-10 pt-8 md:mb-16 md:px-8 px-4">
        <div className="mx-auto ">
          <Image
            src={tracksTitle}
            alt="tracks title"
            className="mx-auto md:max-h-[140px] max-h-[120px] object-contain"
          />
          <p
            className="my-6 text-base text-center  font-[400] text-[#282828]/60 leading-normal max-w-[450px] mx-auto "
            ata-sal="fade"
            data-sal-delay="100"
            data-sal-duration="500"
          >
            5 tracks covering everything you need to sharpen your IT skills.
            <br /> 1 additional track because excellence is not only about code!
          </p>
        </div>
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
  textSize: string;
};

const Track = ({
  title,
  description,
  image,
  index,
  tooltip,
  textSize,
}: TrackType) => {
  const titleStr = title.split("\n").map((str, index) => (
    <span key={index} className="block">
      {str}
    </span>
  ));
  return (
    <a
      href={`/#day-${index}`}
      className="rounded-xl  p-3  cursor-pointer group flex flex-col items-center bg-[#E9D1AD]"
    >
      <div className="w-fit h-[150px] flex flex-row relative items-center justify-center overflow-visible rounded-xl bg-contain  bg-no-repeat bg-center">
        {/* <div className="absolute  bottom-0 left-0 top-0 w-full h-full z-10  rounded-xl flex">
          <span className="track-tooltip absolute " data-tooltip={tooltip} />
        </div> */}
        <div className="flex flex-row items-center justify-center w-1/3 ">
          <Image
            src={image}
            alt="track photo"
            className="h-full  max-h-[150px]   origin-bottom "
            data-sal="fade"
            data-sal-delay={`${index * 100}`}
            data-sal-duration="400"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-2/3 ">
          <Image
            src={trackTitle}
            alt="track photo"
            className="max-w-[100px] origin-bottom "
          />
          <h2
            className={` font-bold capitalize text-center text-[#D35747] leading-tight ${textSize}`}
          >
            {titleStr}
          </h2>
        </div>
      </div>
      <div className="w-full border-[#CA8030] mt-2  border-b-2 border-dashed " />

      <div
        className=" p-2 max-w-[330px] mx-auto"
        data-sal="fade"
        data-sal-delay={`${index * 100}`}
        data-sal-duration="500"
      >
        <p className="text-center w-full mt-1 text-sm font-medium leading-tight text-gray-600 capitalize pt-2 max-w-[300px] ">
          {description}
        </p>
      </div>
    </a>
  );
};
