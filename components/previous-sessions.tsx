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
    image: "/images/sessions/session-4.jpg",
    url: "https://www.youtube.com/watch?v=Wn--h5XyNWI",
  },
  {
    image: "/images/sessions/session-5.jpg",
    url: "https://www.youtube.com/watch?v=5plMb36qvLM",
  },
];

export const PreviousSessions = () => {
  return (
    <section id="last-sessions" className="bg-blue-100/50 py-16">
      <div className="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4  md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            BlablaConf 2021
          </h2>
          <br />
          <p className="w-full text-xl text-gray-600 pr-8 ">
            Rewatch last year’s sessions, and get a sneak peek of What BlaBLa
            2022 would be like.
            <br />
          </p>
        </div>
        {sessions.map((session, index) => (
          <Session
            src={session.image}
            url={session.url}
            key={`session-${index}`}
          />
        ))}
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
      <Image fill className="w-full  object-cover" src={src} alt="session 1" />
      <div className="absolute top-0 h-ful w-full bottom-0 bg-gray-600/20 flex justify-center items-center  ">
        <svg
          width="65"
          height="66"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="32.5"
            cy="32.6299"
            r="32.5"
            fill="black"
            fillOpacity="0.5"
          />
          <g clipPath="url(#clip0_277_5514)">
            <path
              d="M41.7816 31.8456L28.2815 23.605C28.0567 23.4625 27.797 23.3845 27.5308 23.3795C27.2646 23.3746 27.0022 23.4428 26.7722 23.5768C26.5387 23.7049 26.3442 23.8935 26.2089 24.1229C26.0736 24.3522 26.0026 24.6137 26.0034 24.88V41.38C26.0026 41.6462 26.0736 41.9078 26.2089 42.1371C26.3442 42.3664 26.5387 42.555 26.7722 42.6831C27.0022 42.8171 27.2646 42.8854 27.5308 42.8804C27.797 42.8755 28.0567 42.7975 28.2815 42.655L41.7816 34.4143C42.0028 34.2809 42.1858 34.0925 42.3129 33.8674C42.4399 33.6424 42.5067 33.3884 42.5067 33.13C42.5067 32.8716 42.4399 32.6175 42.3129 32.3925C42.1858 32.1675 42.0028 31.9791 41.7816 31.8456Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_277_5514">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(20 21.1299)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </a>
  );
};
