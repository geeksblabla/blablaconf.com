/* eslint-disable react/no-unescaped-entities */

"use client";
import { ReactNode, useState } from "react";

type QuestionType = {
  question: string;
  answer: string | (() => ReactNode);
};

const questions: QuestionType[] = [
  {
    question: "What is BlablaConf?",
    answer: () => (
      <p>
        <strong>BlablaConf</strong> is a community-driven online conference,
        made by developers for developers. It features{" "}
        <strong>5 tracks over 5 days</strong> plus an offline day to connect
        with the community in person. We discuss all IT-related topics—from{" "}
        <strong>Web & UI/UX</strong>, <strong>Big Data & ML</strong>,{" "}
        <strong>Cloud</strong>, <strong>Security</strong>, and{" "}
        <strong>Backend technologies</strong>, to <strong>Soft Skills</strong>
        —with speakers from diverse backgrounds, entirely in our beloved
        dialect, <strong>Moroccan Darija</strong>.
      </p>
    ),
  },
  {
    question: "How much does BlablaConf cost?",
    answer: () => (
      <p>
        BlablaConf is <strong>100% FREE</strong>. We bring together an amazing
        lineup of speakers to help everyone learn about different topics. The
        caliber of speakers at BlablaConf could be seen at events costing
        thousands of MAD in Morocco and abroad. Because{" "}
        <strong>sharing is caring</strong>, we want this content to be
        accessible to everyone, for <strong>free</strong>.
      </p>
    ),
  },
  {
    question: "Will the talks be recorded?",
    answer: () => (
      <p>
        Yes! A <strong>recording</strong> of all tracks and individual sessions
        will be available <strong>after the conference ends</strong>.
      </p>
    ),
  },
  {
    question: "How can I support BlablaConf?",
    answer: () => (
      <p>
        You can support us by <strong>sharing the event</strong> with your
        friends, colleagues, and community—sharing is caring! If you find any
        issues or typos on the website, feel free to open an issue or submit a
        PR on our{" "}
        <a
          href="https://github.com/geeksblabla/blablaconf.com"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repo
        </a>
        . You can also support us by <strong>sponsoring the event</strong>. If
        you're interested in sponsoring BlablaConf, please reach out to us
        through our social media channels.
      </p>
    ),
  },
  {
    question: "How can I register for BlablaConf?",
    answer: () => (
      <p>
        Registration is open until the start of the conference on{" "}
        <strong>February 6th</strong>.{" "}
        <a href="#register">Grab your ticket now!</a>
      </p>
    ),
  },
  {
    question: "Where can I watch the sessions?",
    answer: () => (
      <p>
        All sessions will be streamed live on{" "}
        <a
          href="https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA"
          target="_blank"
          rel="noreferrer"
        >
          Geeksblabla's YouTube channel
        </a>
        . We'll send viewing details to all registrants before the event.
      </p>
    ),
  },
  {
    question: "Can I apply as a speaker?",
    answer: () => (
      <p>
        Of course! However, the <strong>Call for Papers</strong> for this
        edition has closed. Make sure to follow us and watch for the next CFP
        announcement!
      </p>
    ),
  },
  {
    question: "Where can I get updates about upcoming Geeksblabla events?",
    answer: () => (
      <p>
        Follow us on{" "}
        <a
          href="https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </a>
        ,{" "}
        <a
          href="https://twitter.com/geeksblabla"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        ,{" "}
        <a
          href="https://www.facebook.com/geeksblabla"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        ,{" "}
        <a
          href="https://www.instagram.com/geeksblabla/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        , or{" "}
        <a
          href="https://www.linkedin.com/company/geeksblabla-community"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        to get the latest updates.
      </p>
    ),
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="w-full py-16 px-5 sm:px-20 lg:py-24">
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl">
        <div className="title-style leading-[0.8]">
          <span className="mx-auto text-primary">الأسئلة الشائعة</span>
          <span className="mx-auto text-secondary">FAQ</span>
        </div>
        <p
          className="text-center mx-auto max-w-2xl text-xl pt-6 font-bold [-webkit-text-stroke:8px_white] [paint-order:stroke_fill] pb-6"
          ata-sal="fade"
          data-sal-delay="100"
          data-sal-duration="500"
        >
          We have written down answers to some of the frequently asked
          questions. But if you still have any inquiries, feel free to ping us
          on social networks.
        </p>
        <ul className="space-y-4">
          {questions.map((question, index) => (
            <div
              key={`q-${index}`}
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay={index * 50}
            >
              <Question
                question={question.question}
                answer={question.answer}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

const Question = ({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: QuestionType & { index: number; isOpen: boolean; onToggle: () => void }) => {
  return (
    <li
      className={`text-left border-2 border-black shadow-[-8px_8px_0_0_black] transition-all duration-300 rounded-[2rem] ${
        isOpen ? "bg-primary" : "bg-white hover:bg-primary"
      }`}
    >
      <label htmlFor={`accordion-${index}`} className="relative flex flex-col">
        <input
          className="peer hidden"
          type="checkbox"
          id={`accordion-${index}`}
          checked={isOpen}
          onChange={onToggle}
        />
        <Arrow isOpen={isOpen} />

        <div className="relative ml-6 pr-12 cursor-pointer select-none items-center py-4">
          <h3 className="font-bold lg:text-lg">{question}</h3>
        </div>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-100 ease-in-out peer-checked:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="mx-6 pb-4 text-base leading-relaxed text-black/80 [&_a]:text-secondary [&_a]:font-semibold [&_a:hover]:underline">
              {typeof answer === "string" ? <p>{answer}</p> : answer()}
            </div>
          </div>
        </div>
      </label>
    </li>
  );
};

const Arrow = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className={`absolute right-0 top-4 mr-5 h-6 w-6 transition-transform duration-300 ${
      isOpen ? "rotate-180" : "rotate-0"
    }`}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <line
        x1="12"
        y1="5"
        x2="12"
        y2="19"
        className={`origin-center transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
    </svg>
  </div>
);
