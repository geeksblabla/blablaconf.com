import Image, { StaticImageData } from "next/image";

import nourSrc from "@/images/tweets_avatars/nour.jpg";
import amineSrc from "@/images/tweets_avatars/amin.jpg";
import sanaaSrc from "@/images/tweets_avatars/sanaa.jpg";
import brahimSrc from "@/images/tweets_avatars/brahim.jpg";
import afafSrc from "@/images/tweets_avatars/afaf.jpg";
import mohamedSrc from "@/images/tweets_avatars/mohamed.png";
import t1337Src from "@/images/tweets_avatars/1337.jpg";
import wafSrc from "@/images/tweets_avatars/waf.jpg";
import reviewsTitle from "@/images/titles/reviews.png";
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
    <section id="reviews" className="py-16 px-4 bg-[#E9D1AD]/50 text-black/70">
      <div className="mx-auto ">
        <Image
          src={reviewsTitle}
          alt="reviews title"
          className="mx-auto md:max-h-[160px] max-h-[120px] object-contain"
        />
        <p
          className="mb-12 text-lg text-center font-medium leading-normal "
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="500"
        >
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
    }relative md:block rounded-xl overflow-hidden p-5  hover:scale-[1.03] hover:shadow-lg transition-all bg-[#EFE1C5]`}
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
        className="w-12 h-12 object-cover rounded-lg border-2 border-white"
      />
      <div className="flex flex-col ml-3">
        <h3 className="text-black font-bold">{name}</h3>
        <p className="text-black/60 text-sm">{handle}</p>
      </div>
    </div>
    <p className="text-black/90 text-md mt-5">
      {text.split("\n").map((t, i) => (
        <span key={`tweet${i}`}>
          {t}
          <br />
        </span>
      ))}
    </p>
  </div>
);
