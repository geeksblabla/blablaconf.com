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

          const el = document.querySelector(selector);
          if (entry.intersectionRatio > 0.1) {
            if (!isClick.current) {
              scrollToPosition(id);
            }
            el?.setAttribute("data-active", "true");
          } else {
            el?.setAttribute("data-active", "false");
          }
        });
      },
      { threshold: [0.0, 0.1, 0.02, 0.1, 1.0] }
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
      className="sticky md:top-2 top-0  md:h-full h-fit overflow-scroll md:overflow-visible scroll-smooth md:bg-transparent  bg-white/60 z-40 hidden md:block xl:ml-0 lg:ml-5"
    >
      <div className="md:mt-8 mt-1">
        <ul className="md:pt-6 pt-3 relative  pr-12 h-fit w-fit flex flex-row md:flex-col lg:pl-0 md:pl-8">
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
    <li>
      <a
        data-active={index === 0}
        onClick={() => onClick()}
        href={`#day-${index}`}
        className="block group relative mb-8
        min-w-[350px]
        my-.5 px-8 pt-1 pb-2 pr-16  ml-4 bg-[#F5EFE5] data-[active=true]:bg-[#E7B041] hover:bg-[#E7B041] rounded-xl shadow-[0px_0px_0px_0px_black] hover:shadow-[3px_3px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] data-[active=true]:shadow-[5px_5px_0px_0px_black] data-[active=true]:hover:translate-x-[2px] data-[active=true]:hover:translate-y-[2px] data-[active=true]:hover:shadow-[3px_3px_0px_0px_black] transition-all duration-300"
        data-sal="fade"
        data-sal-delay={`${index * 100}`}
        data-sal-duration="400"
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-[#E7B041]">
            <span className="text-[40px] font-extrabold font-sans text-[#E7B041]  group-hover:text-[#53925E]   group-data-[active=true]:text-[#53925E] uppercase tracking-wide fill-current [-webkit-text-stroke:_1.5px_black] [text-shadow:_2px_2px_0_black,_3px_3px_0_black] ">
              {day}
            </span>
            <span
              className="text-[40px] font-extrabold text-[#E7B041] group-hover:text-[#D35747] group-data-[active=true]:text-[#D35747] font-muraba uppercase tracking-wide fill-current [-webkit-text-stroke:_.5px_black] [text-shadow:_2px_2px_0_black,_3px_3px_0_black]
              pt-2
            "
            >
              February
            </span>
          </div>
          <span className="text-base text-right text-black -mt-3">{title}</span>
        </div>
      </a>
    </li>
  );
};
