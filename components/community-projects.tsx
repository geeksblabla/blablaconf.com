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
    url: "https://geeksblabla.com",
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
    url: "https://github.com/DevC-Casa/awesome-morocco",
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
          <h2 className="mb-4 text-4xl sm:text-5xl font-bold md:mb-6 ">
            Community Initiatives
          </h2>
          <p className="text-lg font-medium text-gray-600 leading-normal max-w-[650px]">
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
      className="overflow-hidden flex flex-col items-center   md:flex-row lg:gap-6 relative bg-slate-100 my-4 cursor-pointer rounded-lg  border-2 hover:border-emerald-500 hover:-translate-y-1 transition-all"
      rel="noreferrer"
    >
      <div className=" md:h-24 md:w-24 lg:h-40 w-full min-h-[150px] flex justify-center  items-center lg:w-40 p-2 bg-slate-50">
        <Image
          src={image}
          width={100}
          height={100}
          alt=""
          className="h-full w-full max-w-[200px]  object-center "
        />
      </div>

      <div className="flex flex-1 flex-col p-2">
        <h2 className="text-xl font-bold text-gray-800">
          <p className="transition duration-100 hover:text-emerald-500 active:text-emerald-500 ">
            {name}
          </p>
        </h2>

        <p className="text-gray-500 text-base pr-20 md:pr-0 mt-2">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center bg-emerald-500 text-white transition-all hover:w-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 -rotate-[45deg]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </a>
  );
};
