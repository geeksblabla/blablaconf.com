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
        <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl capitalize ">
          5 + 1 Tracks
        </h2>
        <p className="mb-12 text-lg font-medium text-gray-600 leading-normal max-w-[650px]  ">
          5 tracks covering everything you need to sharpen your IT skills. 1
          additional track because excellence is not only about code!
        </p>
      </div>
      <div className="mx-auto  grid max-w-screen-xl grid-cols-1 gap-6 py-6  sm:px-6 md:grid-cols-2 lg:grid-cols-3 md:px-8 px-4">
        {tracks.map((track, index) => (
          <Track key={index} {...track} />
        ))}
      </div>
    </section>
  );
};

type TrackType = {
  title: string;
  description: string;
  image: string;
};

const Track = ({ title, description, image }: TrackType) => {
  return (
    <article className="rounded-xl  p-3 shadow-sm hover:shadow-md bg-gray-100/50 cursor-pointer">
      <div className="relative flex items-center justify-center overflow-hidden rounded-xl p-6">
        <Image height={200} width={200} src={image} alt="track photo" />
      </div>

      <div className="mt-1 p-2">
        <h2 className="text-xl font-semibold capitalize">{title}</h2>
        <p className="w-full text-sm font-medium leading-tight text-gray-600 capitalize pt-2">
          {description}
        </p>
      </div>
    </article>
  );
};
