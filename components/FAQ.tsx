/* eslint-disable react/no-unescaped-entities */
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type QuestionType = {
  question: string;
  answer: string | (() => ReactNode);
};

const questions: QuestionType[] = [
  {
    question: "What is BlablConf?",
    answer: `BlablaConf is a community driven online conference, made by developers for developers. Blabla contains 5 tracks in 5 days and one offline day to connect with the community in person. we discuss all the web related topics, from Web & UI/UX, Big Data & ML, Cloud, Security, Backend technologies, to Soft skills, with our speakers from different backgrounds and completely in our Moroccan Darija.`,
  },
  {
    question: "How much does BlablaConf cost?",
    answer: `BlablaConf is 100% FREE. BlablaConf is bringing together a truly  speakers lineup to help each other find out more about different topics.  The caliber of speakers in Blabla could be seen in events costing thousands of MAD in Morocco and abroad.  As sharing is caring, we want this content to be accessible for everyone, for FREE`,
  },
  {
    question: "Will the talks be recorded?",
    answer: `A recording of the entire tracks and each session will be available after the end of the conference`,
  },
  {
    question: "How I can support BlablaConf?",
    answer: () => (
      <p>
        You can support us by sharing the event with your friends, colleagues,
        and community. Sharing is caring! <br />
        If you find any issue or typo in the website,Make sure to open an issue
        or submit a new PR on our{" "}
        <Link href="https://github.com/DevC-Casa/blablaconf.com">
          {" "}
          GitHub repo{" "}
        </Link>{" "}
        . You can also support us by sponsoring the event. If you are interested
        in sponsoring BlablaConf, please get in touch with us in our social
        media channels
      </p>
    ),
  },
  {
    question: "How can I register to BlablaConf?",
    answer: () => (
      <p>
        Registration for BlablaConf are open until the start of the conference,
        on October 19th, <a>Grab you ticket.</a>
      </p>
    ),
  },
  {
    question: "Where can I watch the sessions?",
    answer: () => (
      <p>
        Via{" "}
        <Link href="https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA">
          Geeksblala's Youtube channel
        </Link>
        , &nbsp;We will provide viewing details to all registrants prior to the
        event.
      </p>
    ),
  },
  {
    question: "Can I apply as a speaker?",
    answer: "Unfortunately, the CFP for this edition is already closed",
  },
  {
    question: "Where can I get updates about upcoming events of Geeksblabla?",
    answer: () => (
      <p>
        You can subscribe to{" "}
        <Link href="https://tinyletter.com/geeksBlabla">the mailing list</Link>{" "}
        to keep yourself updated about future events of Geeksblabla and
        BlablaConf. You can also follow us on{" "}
        <Link href="https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA">
          Youtube
        </Link>
        , <Link href="https://twitter.com/geeksblabla">Twitter</Link> ,{" "}
        <Link href="https://www.facebook.com/geeksblabla">Facebook</Link>,{" "}
        <Link href="https://www.instagram.com/geeksblabla/">Instagram</Link> or{" "}
        <Link href="https://www.linkedin.com/company/geeksblabla/">
          LinkedIn
        </Link>
        .
      </p>
    ),
  },
];

export const FAQ = () => {
  return (
    <div className="relative mx-auto w-full py-16 px-5 font-sans text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
      <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl text-center">
        Frequently asked Questions
      </h2>
      <p className="mb-12 text-lg font-medium text-gray-600 leading-normal max-w-[650px] mx-auto text-center">
        We have written down answers to some of the frequently asked questions.
        But, if you still have any queries, feel free to ping us on chat.
      </p>
      <ul className="space-y-4">
        {questions.map((question, index) => (
          <Question
            key={`q-${index}`}
            question={question.question}
            answer={question.answer}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

const Question = ({
  question,
  answer,
  index,
}: QuestionType & { index: number }) => {
  return (
    <li className="text-left">
      <label
        htmlFor={`accordion-${index}`}
        className="relative flex flex-col rounded-md border-b-[1px] border-gray-200"
      >
        <input
          className="peer hidden"
          type="checkbox"
          id={`accordion-${index}`}
          defaultChecked={index === 0}
        />
        <Arrow />

        <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
          <h3 className="text-md text-neutral-600 font-bold lg:text-base">
            {question}
          </h3>
        </div>
        <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
          <div className="p-5">
            {typeof answer === "string" ? (
              <p className="text-md">{answer}</p>
            ) : (
              <>{answer()}</>
            )}
          </div>
        </div>
      </label>
    </li>
  );
};

const Link = ({
  children,
  ...props
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  return (
    <a
      {...props}
      rel="noreferrer"
      target="_blank"
      className="text-emerald-500 hover:underline"
    >
      {children}
    </a>
  );
};

const Arrow = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    className="absolute right-0 top-4 ml-auto mr-5 h-5 text-gray-400 transition-all duration-500 peer-checked:rotate-180 peer-checked:text-gray-800"
    stroke="currentColor"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_277_5712)">
      <path
        d="M12.5 6.15137L12.5 20.1514"
        stroke="currentColor"
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.251 13.6514L12.501 20.4014L5.75098 13.6514"
        stroke="currentColor"
        strokeWidth="1.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_277_5712">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(24.5 24.1514) rotate(-180)"
        />
      </clipPath>
    </defs>
  </svg>
);
