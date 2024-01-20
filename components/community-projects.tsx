import Image from "next/image";

type ProjectType = {
  name: string;
  description: string;
  url: string;
  image: string;
};
// TODO: fix group hover
const projects = [
  {
    name: "Geeksblabla",
    url: "https://geeksblabla.io",
    image: "/images/geeksblabla.svg",
    description:
      "GeeksBlaBla is a community initiative, to discuss, highlight and share the latest IT topics in Moroccan Darija.",
  },
  {
    name: "State Of Dev in Morocco",
    url: "https://stateofdev.ma",
    image: "/images/state.svg",
    description:
      "The annual survey on Software Developers in Morocco to provide data on the tech community and their professional paths",
  },
  {
    name: "Awesome Moroccan ",
    url: "https://awesome-morocco.dev",
    image: "/images/awesome-morocco.svg",
    description:
      "List of awesome Moroccan things for developers. Communities, Events, Blogs, Podcasts, Youtube Channels, Open Source Projects, Books and more",
  },
];
export const CommunityProjects = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-12" id="community-initiatives">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mb-10 pt-8 md:mb-16">
          <h2 className="text-3xl font-bold md:text-5xl capitalize text-center text-gradient">
            Community Initiatives
          </h2>
          <p className="mt-4 mx-auto text-lg font-medium text-[#282828]  max-w-[600px] text-center">
            BlaBlaConf is our yearly show, where we get together and celebrate
            the achievement of the Moroccan community. Of the same DNA, find
            here more community initiatives.
          </p>
        </div>

        <div className="">
          {projects.map((project, index) => (
            <Project {...project} key={`project-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Project = ({ name, image, url, description }: ProjectType) => {
  return (
    <a
      href={url}
      target="_blank"
      className="overflow-hidden flex flex-col items-center  md:flex-row lg:gap-6 relative bg-white my-4 cursor-pointer rounded-xl hover:-translate-y-1 transition-all max-w-[900px] mx-auto"
      rel="noreferrer"
    >
      <div className="md:h-24 md:w-24 lg:h-40 w-full min-h-[150px] flex justify-center md:mx-4 mx-0 items-center lg:w-40 p-2 bg-white">
        <Image
          src={image}
          width={100}
          height={100}
          alt=""
          className="h-full w-full max-w-[200px]  object-center "
        />
      </div>

      <div className="flex flex-1 flex-col p-2">
        <h2 className="text-2xl font-bold text-gradient">{name}</h2>

        <p className="text-[#282828] text-lg pr-20 md:pr-0 mt-2">
          {description}
        </p>
      </div>
    </a>
  );
};
