import Image from "next/image";

// TODO
const sessions = [
  {
    image: "/images/sessions/session-1.jpg",
    url: "https://www.youtube.com/watch?v=QuzXJ-1eiq4",
  },
  {
    image: "/images/sessions/session-2.jpg",
    url: "https://www.youtube.com/watch?v=BCMBvCYHUq0",
  },
  {
    image: "/images/sessions/session-3.jpg",
    url: "https://www.youtube.com/watch?v=oZmanpotSiw",
  },
  {
    image: "/images/sessions/session-1.jpg",
    url: "https://www.youtube.com/watch?v=QuzXJ-1eiq4",
  },
  {
    image: "/images/sessions/session-2.jpg",
    url: "https://www.youtube.com/watch?v=BCMBvCYHUq0",
  },
  {
    image: "/images/sessions/session-3.jpg",
    url: "https://www.youtube.com/watch?v=oZmanpotSiw",
  },
];

export const PreviousSessions = () => {
  return (
    <section
      id="last-sessions"
      className="py-16 bg-gradient-to-r from-[#FFF] to-[#F4EAE4]"
    >
      <div className="mx-auto max-w-lg px-4 md:max-w-screen-xl text-center">
        <div>
          <h2 className=" text-3xl font-bold md:text-5xl capitalize text-center text-gradient">
            BlablaConf 2023
          </h2>
          <br />
          <p className="w-full text-lg text-[#282828] max-w-[500px] mx-auto">
            Rewatch last year’s sessions, and get a sneak peek of what
            BlaBLaConf 2022 would be like.
            <br />
          </p>
        </div>
        <div className="mt-16 mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4  md:max-w-screen-xl md:grid-cols-1 md:px-8 lg:grid-cols-3">
          {sessions.map((session, index) => (
            <Session
              src={session.image}
              url={session.url}
              key={`session-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Session = ({ src, url }: { src: string; url: string }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="shadow-md rounded-lg relative h-[220px] cursor-pointer overflow-hidden hover:scale-105 transition-all"
      rel="noreferrer"
    >
      <Image fill className="w-full  object-fill" src={src} alt="session 1" />
      <div className="absolute top-0 h-ful w-full bottom-0 bg-[#A2765D]/20 flex justify-center items-center  ">
        <svg
          width="60"
          height="60"
          viewBox="0 0 86 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_493_1153)">
            <circle cx="43" cy="43" r="43" fill="white" fill-opacity="0.8" />
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
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
