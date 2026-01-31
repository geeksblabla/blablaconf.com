"use client";
import React from "react";

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
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
      { threshold: [0.0, 0.1, 0.02, 0.1, 1.0] },
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
      className="sticky top-2 h-full overflow-visible bg-transparent z-40 hidden md:block"
    >
      <div className="md:mt-8 mt-1">
        <ul className="md:pt-6 pt-3 relative pr-6 lg:pr-12 h-fit w-fit flex flex-row md:flex-col">
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
        className="block group relative mb-6 md:min-w-[250px] lg:min-w-[320px] md:px-3 lg:px-5 py-3 ml-4 border-[3px] border-black bg-white data-[active=true]:bg-secondary hover:bg-secondary rounded-[2rem] shadow-[-6px_6px_0_0_black] hover:shadow-none hover:-translate-x-[6px] hover:translate-y-[6px] transition-all duration-300"
      >
        <div className="flex items-center md:gap-2 lg:gap-4">
          {/* Day Number - Left */}
          <span className="md:text-4xl lg:text-5xl font-black text-accent group-hover:text-white group-data-[active=true]:text-white leading-none">
            {day}
          </span>

          {/* Month & Title - Right */}
          <div className="flex flex-col">
            <span className="md:text-2xl lg:text-3xl font-marhaban group-hover:text-white group-data-[active=true]:text-white">
              February
            </span>
            <span className="text-md text-black/70 group-hover:text-white/80 group-data-[active=true]:text-white/80 font-medium">
              {title}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
};
