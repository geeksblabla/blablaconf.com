import Image, { StaticImageData } from "next/image";

import nourSrc from "@/images/tweets_avatars/nour.jpg";
import amineSrc from "@/images/tweets_avatars/amin.jpg";
import sanaaSrc from "@/images/tweets_avatars/sanaa.jpg";
import brahimSrc from "@/images/tweets_avatars/brahim.jpg";
import afafSrc from "@/images/tweets_avatars/afaf.jpg";
import mohamedSrc from "@/images/tweets_avatars/mohamed.png";
import t1337Src from "@/images/tweets_avatars/1337.jpg";
import wafSrc from "@/images/tweets_avatars/waf.jpg";

const tweets: TweetType[][] = [
  [
    {
      text: "You cannot just miss #blablaconf by @geeksblabla even when it coincides your working hours",
      name: "Sanaa Harmach",
      avatar: sanaaSrc,
      handle: "@Harmach_",
      featured: true,
    },

    {
      text: "It's #Blablaconf WEEK\n Join this amazing tech community and meet the speakers to learn more about the hottest tech trends \nMany thanks to @geeksblabla team",
      name: "Amine AIT AAZIZI",
      avatar: amineSrc,
      handle: "@aaitaazizi",
    },
    {
      text: "To me, BlablaConf is the best annual IT festival, baked by moroccans for moroccans 😍",
      name: "Mohamed Boukhlif",
      avatar: mohamedSrc,
      handle: "@b0ndif",
      featured: true,
    },
  ],

  [
    {
      text: "1337 loves @Geeksblabla et #BlablaConf",
      name: "1337",
      avatar: t1337Src,
      handle: "@1337FIL",
      featured: true,
    },
    {
      text: "What you know may seem obvious to you but it's a groundbreaking information to someone new. \nShare like @geeksblabla gang does! #blablaconf",
      name: "Nour Oumousse",
      avatar: nourSrc,
      handle: "@NourOumousse",
      featured: true,
    },

    {
      text: "#blablaconf was one of the best things this year, but sadly it reached the end.",
      name: "Brahim",
      avatar: brahimSrc,
      handle: "@af_bra",
    },
  ],
  [
    {
      text: "Enjoying #blablaconf days even when having homework to do \nP.S: I'm sure I won't catch a lot of things since I'm focusing on my homework, but still, I should not miss this beautiful confee",
      name: "Afaf Ridaoui",
      avatar: afafSrc,
      handle: "@__iamaf",
    },

    {
      text: "I don't know how to explain it, but the combination of technology and our culture gives us a special touch in the global technical community. #Blablaconf is an event that gives us this opportunity, tell the world that we can be  global while preserving our culture",
      name: "Wafwaf",
      avatar: wafSrc,
      handle: "@fofino_o",
      featured: true,
    },
  ],
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-20 px-5 sm:px-20 lg:py-28">
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl">
        <div className="title-style leading-[0.8]">
          <span className="mx-auto text-primary">اشنو قالو علينا؟</span>
          <span className="mx-auto text-secondary">Reviews</span>
        </div>
        <p
          className="text-center mx-auto max-w-2xl text-xl pt-6 font-bold [-webkit-text-stroke:8px_white] [paint-order:stroke_fill] pb-6"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="500"
        >
          We love our community and our community loves us back!
        </p>

        <div className="flex flex-col md:grid grid-cols-3 gap-6 pt-6">
          {tweets.map((chunk, i) => (
            <div
              className="flex flex-col gap-6"
              key={`col${i}`}
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay={i * 150}
            >
              {chunk.map((tweet, index) => (
                <Tweet {...tweet} key={`tweet${index}`} index={index} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

type TweetType = {
  text: string;
  name: string;
  avatar: StaticImageData;
  handle: string;
  index?: number;
  featured?: boolean;
};

const Tweet = ({
  text,
  name,
  avatar,
  handle,
  index = 0,
  featured = false,
}: TweetType) => {
  const highlightText = (text: string) => {
    return text.split(/(\s+)/).map((word, i) => {
      if (word.startsWith("#") || word.startsWith("@")) {
        return (
          <span key={i} className="text-[#1DA1F2] font-medium">
            {word}
          </span>
        );
      }
      return word;
    });
  };

  return (
    <div
      className={`${
        !featured ? "hidden md:block" : ""
      } relative rounded-[2rem] overflow-hidden p-6 bg-white hover:bg-primary border-[3px] border-black shadow-[-8px_8px_0_0_black] hover:shadow-none hover:-translate-x-[8px] hover:translate-y-[8px] transition-all duration-300`}
    >
      {/* Twitter/X Icon */}
      <div className="absolute top-4 right-4 text-gray-500">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      {/* Avatar & Info */}
      <div className="flex flex-row items-center">
        <div className="rounded-full border-[3px] border-black overflow-hidden w-16 h-16 min-w-16 min-h-16">
          <Image
            alt={name}
            src={avatar}
            width={56}
            height={56}
            className="w-full h-full object-cover aspect-square"
          />
        </div>
        <div className="flex flex-col ml-4">
          <h3 className="text-black font-bold text-lg">{name}</h3>
          <p className="text-gray-500 text-sm">{handle}</p>
        </div>
      </div>

      {/* Tweet Text */}
      <p className="text-black/80 text-base leading-relaxed mt-5">
        {text.split("\n").map((t, i) => (
          <span key={`tweet${i}`}>
            {highlightText(t)}
            <br />
          </span>
        ))}
      </p>

      {/* Decorative Quote */}
      <div className="absolute -bottom-4 -right-2 text-primary/10 text-8xl font-serif pointer-events-none">
        &ldquo;
      </div>
    </div>
  );
};
