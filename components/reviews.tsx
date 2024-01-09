import Image from "next/image";
const tweets = [
  [
    "174756",
    "174808",
    "174814",
    "174616",
    "174624",
    "174850",
    "174631",
    "174652",
    "174700",
  ],
  [
    "174900",
    "174906",
    "174914",
    "174925",
    "174932",
    "174743",
    "174939",
    "174944",
    "175001",
  ],
  [
    "174731",
    "175008",
    "175024",
    "174710",
    "174716",
    "174723",
    "174824",
    "174833",
    "174841",
  ],
];

export const Reviews = () => {
  return (
    <section
      id="reviews"
      className="py-16 px-4 bg-gradient-to-r from-[#7C5741] to-[#B28367] text-white"
    >
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl md:px-8 px-4 justify-center text-center">
        <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-5xl md:leading-tight capitalize  ">
          What community members <br /> say about the conference
        </h2>
        <p className="mb-12 text-lg font-medium leading-normal ">
          We love our community and our community loves us back ❤️ 💚
        </p>
      </div>

      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl flex flex-col md:flex-row md:px-6 pt-10 ">
        {tweets.map((chunk, i) => (
          <div className="flex flex-col space-y-3 px-2" key={`col${i}`}>
            {chunk.map((tweet, index) => (
              <Card image={tweet} key={`tweet${index}`} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

const Card = ({ image }: { image: string }) => (
  <div className="relative rounded-xl overflow-hidden p-2 shadow-md hover:scale-[1.03] hover:shadow-lg transition-all">
    <Image
      alt=""
      width={400}
      height={400}
      src={`/images/tweets/tweet-${image}.png`}
      className="mx-auto w-full h-full  object-cover"
    />
    <div className="absolute h-full w-2 bottom-0 right-0  bg-white p-2" />
  </div>
);
