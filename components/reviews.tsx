import Image, { StaticImageData } from "next/image";

import nourSrc from "../images/tweets_avatars/nour.jpg";
import amineSrc from "../images/tweets_avatars/amin.jpg";
import sanaaSrc from "../images/tweets_avatars/sanaa.jpg";
import brahimSrc from "../images/tweets_avatars/brahim.jpg";
import afafSrc from "../images/tweets_avatars/afaf.jpg";
import mohamedSrc from "../images/tweets_avatars/mohamed.png";
import t1337Src from "../images/tweets_avatars/1337.jpg";

const tweets: TweetType[][] = [
  [
    {
      text: "What you know may seem obvious to you but it's a groundbreaking information to someone new. \nShare like @geeksblabla gang does! #blablaconf",
      name: "Nour Oumousse",
      avatar: nourSrc,
      handle: "@NourOumousse",
      featured: true,
    },
    {
      text: "It's #Blablaconf WEEK\n Join this amazing tech community and meet the speakers to learn more about the hottest tech trends \nMany thanks to @geeksblabla team",
      name: "Amine AIT AAZIZI",
      avatar: amineSrc,
      handle: "@aaitaazizi",
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
      text: "You cannot just miss #blablaconf by @geeksblabla even when it coincides your working hours",
      name: "Sanaa Harmach",
      avatar: sanaaSrc,
      handle: "@Harmach_",
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
      text: "To me, BlablaConf is the best annual IT festival, baked by moroccans for moroccans 😍",
      name: "Mohamed Boukhlif",
      avatar: mohamedSrc,
      handle: "@b0ndif",
      featured: true,
    },
  ],
];

export const Reviews = () => {
  return (
    <section
      id="reviews"
      className="py-16 px-4 bg-gradient-to-r from-[#9E735A] to-[#A77A60] text-white"
    >
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl md:px-8 px-4 justify-center text-center">
        <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-5xl md:leading-tight capitalize  ">
          What community members <br /> say about the conference
        </h2>
        <p className="mb-12 text-lg font-medium leading-normal ">
          We love our community and our community loves us back ❤️ 💚
        </p>
      </div>

      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl flex flex-col md:grid grid-cols-3 md:px-6 pt-10  ">
        {tweets.map((chunk, i) => (
          <div className="flex flex-col space-y-3 px-2 mb-3" key={`col${i}`}>
            {chunk.map((tweet, index) => (
              <Tweet {...tweet} key={`tweet${index}`} index={index} />
            ))}
          </div>
        ))}
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
}: TweetType) => (
  <div
    className={`${
      !featured ? "hidden md:block" : ""
    }relative md:block rounded-xl overflow-hidden p-5  hover:scale-[1.03] hover:shadow-lg transition-all bg-[#906850]`}
    data-sal="slide-down"
    data-sal-delay={`${index * 130}`}
    data-sal-duration="500"
  >
    <div className="flex flex-row items-center ">
      <Image
        alt=""
        src={avatar}
        width={50}
        height={50}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex flex-col ml-3">
        <h3 className="text-white font-bold">{name}</h3>
        <p className="text-white/60 text-sm">{handle}</p>
      </div>
    </div>
    <p className="text-white/90 text-md mt-5">
      {text.split("\n").map((t, i) => (
        <span key={`tweet${i}`}>
          {t}
          <br />
        </span>
      ))}
    </p>
  </div>
);
