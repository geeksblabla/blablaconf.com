/* eslint-disable react/no-unescaped-entities */

"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";
import FaqTitle from "@/images/titles/faq.svg";

type QuestionType = {
  question: string;
  answer: string | (() => ReactNode);
};

const questions: QuestionType[] = [
  {
    question: "What is BlablaConf?",
    answer: `BlablaConf is a community driven online conference, made by developers for developers. BlablaConf contains 5 tracks in 5 days and one offline day to connect with the community in person. We discuss all IT related topics, from Web & UI/UX, Big Data & ML, Cloud, Security, Backend technologies, to Soft skills, with our speakers from different backgrounds and completely in our beloved dialect, Moroccan Darija.`,
  },
  {
    question: "How much does BlablaConf cost?",
    answer: `BlablaConf is 100% FREE. BlablaConf is bringing together a truly speakers lineup to help each other find out more about different topics.  The caliber of speakers in BlablaConf could be seen in events costing thousands of MAD in Morocco and abroad.  As sharing is caring, we want this content to be accessible for everyone, for FREE`,
  },
  {
    question: "Will the talks be recorded?",
    answer: `A recording of the entire tracks and each session will be available after the end of the conference`,
  },
  {
    question: "How can I support BlablaConf?",
    answer: () => (
      <p>
        You can support us by sharing the event with your friends, colleagues,
        and community. Sharing is caring! <br />
        If you find any issue or typo in the website, make sure to open an issue
        or submit a new PR on our{" "}
        <a
          href="https://github.com/geeksblabla/blablaconf.com"
          target="_blank"
          rel="noreferrer"
          className="text-secondary font-bold hover:underline"
        >
          GitHub repo
        </a>{" "}
        . You can also support us by sponsoring the event. If you are interested
        in sponsoring BlablaConf, please get in touch with us in our social
        media channels.
      </p>
    ),
  },
  {
    question: "How can I register to BlablaConf?",
    answer: () => (
      <p>
        Registration for BlablaConf are open until the start of the conference,
        on February 7th,{" "}
        <a
          href="#register"
          className="text-secondary font-bold hover:underline"
        >
          Grab your ticket.
        </a>
      </p>
    ),
  },
  {
    question: "Where can I watch the sessions?",
    answer: () => (
      <p>
        Via{" "}
        <a
          href="https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA"
          target="_blank"
          rel="noreferrer"
          className="text-secondary font-bold hover:underline"
        >
          Geeksblala's Youtube channel
        </a>
        , &nbsp;We will provide viewing details to all registrants prior to the
        event.
      </p>
    ),
  },
  {
    question: "Can I apply as a speaker?",
    answer:
      "Of course! But not for this edition. Make sure to follow us and watch for the next Call for Papers.",
  },
  {
    question: "Where can I get updates about upcoming events of Geeksblabla?",
    answer: () => (
      <p>
        Follow us on{" "}
        <a
          href="https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA"
          target="_blank"
          rel="noreferrer"
          className="text-secondary font-bold hover:underline"
        >
          Youtube
        </a>
        ,{" "}
        <a
          href="https://twitter.com/geeksblabla"
          target="_blank"
          rel="noreferrer"
          className="text-secondary font-bold hover:underline"
        >
          Twitter
        </a>{" "}
        ,{" "}
        <a
          href="https://www.facebook.com/geeksblabla"
          target="_blank"
          rel="noreferrer"
          className="text-secondary font-bold hover:underline"
        >
          Facebook
        </a>
        ,{" "}
        <a
          href="https://www.instagram.com/geeksblabla/"
          target="_blank"
          rel="noreferrer"
          className="text-secondary font-bold hover:underline"
        >
          Instagram
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/company/geeksblabla-community"
          target="_blank"
          rel="noreferrer"
          className="text-secondary font-bold hover:underline"
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
        <Image
          src={FaqTitle}
          alt="FAQ Header"
          width={0}
          height={200}
          className="mx-auto"
        />
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
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-in-out peer-checked:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="px-6 pb-4 text-md">
              {typeof answer === "string" ? answer : answer()}
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
