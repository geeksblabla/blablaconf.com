import Image from "next/image";

const tracks = [
  {
    title: "Web, mobile & UX",
    description:
      "Design and prototype faster, with an entire library of ready components.",
    image: "/images/tracks/web-mobile.png",
  },
  {
    title: "Backend Technologies & Programming languages",
    description:
      "All about programming languages, functional, reactive, emerging languages, tools, libraries, etc",
    image: "/images/tracks/backend.png",
  },
  {
    title: "Security & Architecture",
    description:
      "How-Tos, strategies, tools, techniques, and best practices for getting architecture and security right.",
    image: "/images/tracks/sec-arch.png",
  },
  {
    title: "Big Data & Machine Learning",
    description:
      "Big Data, Fast Data, NoSQL, Machine learning, Deep Learning, Neural Networks, TensorFlow, etc",
    image: "/images/tracks/big-data.png",
  },
  {
    title: "Cloud, Containers & Infrastructure",
    description:
      "Serverless, Docker, Kubernetes, Service Mesh, Cloud, PaaS, and anything in-between.",
    image: "/images/tracks/cloud.png",
  },
  {
    title: "Soft Skills",
    description:
      "Emotional Intelligence, Critical Thinking, Evaluation, Mindfulness, Leadership...",
    image: "/images/tracks/soft-skills.png",
  },
];

export const Tracks = () => {
  return (
    <section id="tracks" className="py-16">
      <div className="mx-auto max-w-screen-xl mb-10 pt-8 md:mb-16 md:px-8 px-4">
        <h2
          className="mb-4 text-3xl font-bold md:mb-6 md:text-7xl capitalize text-center text-[#7C5944] "
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
  image: string;
  index: number;
};

const Track = ({ title, description, image, index }: TrackType) => {
  return (
    <article className="rounded-xl  p-3  cursor-pointer group flex flex-col items-center">
      <div className="w-fit items-center justify-center overflow-visible rounded-xl  bg-[url('/images/tracks/t-back.svg')] bg-contain  bg-no-repeat bg-center">
        <Image
          height={200}
          width={200}
          src={image}
          alt="track photo"
          className=" transition duration-300 group-hover:animate-swing origin-bottom"
          data-sal="fade"
          data-sal-delay={`${index * 100 + 200}`}
          data-sal-duration="200"
        />
      </div>

      <div
        className="mt-1 p-2 max-w-[330px] mx-auto"
        data-sal="fade"
        data-sal-delay={`${index * 100 + 200}`}
        data-sal-duration="200"
      >
        <h2 className="text-2xl font-bold capitalize text-center text-[#7D5A45]">
          {title}
        </h2>
        <p className=" text-center w-full text-sm font-medium leading-tight text-gray-600 capitalize pt-2">
          {description}
        </p>
      </div>
    </article>
  );
};
