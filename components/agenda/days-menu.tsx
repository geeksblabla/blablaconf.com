"use client";
import React from "react";

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export const DaysMenu = ({
  days,
}: {
  days: { date: string; title: string }[];
}) => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");

          const selector = `a[href='#${id}']`;
          if (!document.querySelector(selector)) return;
          if (entry.intersectionRatio > 0.1) {
            const el = document.querySelector(selector);
            // el?.scrollIntoView({ behavior: "smooth", block: "center" });
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
    <div className="sticky top-0  md:h-full h-fit bg-green-50 overflow-scroll md:overflow-visible">
      <div className="mt-8">
        <ul className="pt-6 relative md:border-l-[1px] md:border-t-[0px] border-t-[1px] border-l-[0px] border-gray-300 pr-12  h-fit  w-full flex flex-row md:flex-col  ">
          {days.map((day, index) => {
            return (
              <Day
                day={day.date}
                title={day.title}
                key={`day-${index}`}
                index={index}
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
}: {
  day: string;
  title: string;
  index: number;
}) => {
  return (
    <li className="mb-10 ml-6 min-h-[80px]  min-w-[200px] text-gray-400">
      <a href={`#day-${index}`} className="transition-all duration-75">
        <span className="md:flex absolute hidden -left-3 justify-center items-center w-6 h-6 bg-gray-200 rounded-full  ">
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            ></path>
          </svg>
        </span>
        <span className="flex absolute md:hidden -top-3 justify-center items-center w-6 h-6 bg-gray-200 rounded-full  ">
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            ></path>
          </svg>
        </span>
        <time className="block mb-2 text-sm font-normal leading-none ">
          {day}
        </time>
        <h3 className="flex items-center mb-1 text-lg font-semibold">
          {title}
        </h3>
      </a>
    </li>
  );
};
