"use client";
import React from "react";

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

function debounce<A = unknown, R = void>(
  fn: (args: A) => R,
  ms: number
): [(args: A) => Promise<R>, () => void] {
  let timer: NodeJS.Timeout;

  const debouncedFunc = (args: A): Promise<R> =>
    new Promise((resolve) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        resolve(fn(args));
      }, ms);
    });

  const teardown = () => clearTimeout(timer);

  return [debouncedFunc, teardown];
}

const scrollToPosition = (id: string | null) => {
  const container = document.getElementById("agenda-scroll");
  if (container) {
    const index = parseInt(id?.split("-")[1] || "0");
    container.scroll(320 * index, 0);
  }
};

export const DaysMenu = ({
  days,
}: {
  days: { date: string; title: string }[];
}) => {
  const isClick = React.useRef<boolean>(false);

  // we add this to avoid the scroll behavior to element position on click as we already scrolled manually
  const onClick = () => {
    isClick.current = true;
    setTimeout(() => {
      isClick.current = false;
    }, 2000);
  };
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");

          const selector = `a[href='#${id}']`;
          if (!document.querySelector(selector)) return;
          if (entry.intersectionRatio > 0.1) {
            const el = document.querySelector(selector);
            if (!isClick.current) {
              scrollToPosition(id);
            }
            el?.classList.add("text-gray-900");
            el?.classList.add("underline");
          } else {
            const el = document.querySelector(selector);
            el?.classList.remove("text-gray-900");
            el?.classList.remove("underline");
          }
        });
      },
      { threshold: [0.0, 0.1, 0.02, 0.9, 1.0] }
    );

    document
      ?.getElementById("agenda")
      ?.querySelectorAll("div[id]")
      .forEach((section) => {
        observer.observe(section);
      });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div
      id="agenda-scroll"
      className="sticky top-2  md:h-full h-fit overflow-scroll md:overflow-visible scroll-smooth"
    >
      <div className="mt-8">
        <ul className="pt-6 relative md:border-l-[1px] md:border-t-[0px] border-t-[1px] border-l-[0px] border-white pr-12  h-fit  w-fit flex flex-row md:flex-col  ">
          {days.map((day, index) => {
            return (
              <Day
                day={day.date}
                title={day.title}
                key={`day-${index}`}
                index={index}
                onClick={onClick}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Day = ({
  day,
  title,
  index,
  onClick,
}: {
  day: string;
  title: string;
  index: number;
  onClick: () => void;
}) => {
  return (
    <li className="md:mb-10 mb-0 ml-6 md:min-h-[80px]  md:w-[350px] w-[300px] text-[#5E330E]">
      <a
        onClick={() => onClick()}
        href={`#day-${index}`}
        className="transition-all duration-75"
        data-sal="fade"
        data-sal-delay={`${index * 100}`}
        data-sal-duration="400"
      >
        <div className="md:flex absolute hidden -left-8  justify-center items-center w-16 h-16 rounded-full bg-white">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.38462 0C8.06435 0 8.61539 0.551034 8.61539 1.23077V3.69231H23.3846V1.23077C23.3846 0.551034 23.9357 0 24.6154 0C25.2951 0 25.8462 0.551034 25.8462 1.23077V3.69231H27.0769C29.7959 3.69231 32 5.89644 32 8.61539V27.0769C32 29.7959 29.7959 32 27.0769 32H4.92308C2.20414 32 0 29.7959 0 27.0769V8.61539C0 5.89644 2.20414 3.69231 4.92308 3.69231H6.15385V1.23077C6.15385 0.551034 6.70488 0 7.38462 0ZM29.5385 14.7692C29.5385 13.4098 28.4364 12.3077 27.0769 12.3077H4.92308C3.56361 12.3077 2.46154 13.4098 2.46154 14.7692V27.0769C2.46154 28.4364 3.56361 29.5385 4.92308 29.5385H27.0769C28.4364 29.5385 29.5385 28.4364 29.5385 27.0769V14.7692Z"
              fill="#7D5841"
            />
          </svg>
        </div>
        <div className="ml-8">
          <time className="block md:mb-2 mb-1 text-xs md:text-sm font-normal leading-none ">
            {day}
          </time>
          <h3 className="flex items-center mb-5 text-md md:text-lg font-semibold">
            {title}
          </h3>
        </div>
      </a>
    </li>
  );
};
