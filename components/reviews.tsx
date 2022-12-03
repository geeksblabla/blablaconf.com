import Image from "next/image";
const tweets = [
  "174756",
  "174808",
  "174814",
  "174616",
  "174624",
  "174850",
  "174631",
  "174652",
  "174700",
  "174900",
  "174906",
  "174914",
  "174925",
  "174932",
  "174743",
  "174939",
  "174944",
  "175001",
  "174731",
  "175008",
  "175024",
  "174710",
  "174716",
  "174723",
  "174824",
  "174833",
  "174841",
];

function spliceIntoChunks(arr: string[], chunkSize: number) {
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
}
// TODO: implement show more button
export const Reviews = () => {
  const chunks = spliceIntoChunks(tweets, 9);
  return (
    <div className="py-16 px-5">
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl">
        <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl capitalize ">
          What community members <br /> say about the conference
        </h2>
        <p className="mb-12 text-lg font-medium text-gray-600 leading-normal max-w-[650px] mx-auto text-center"></p>
      </div>

      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl flex px-2 pt-10 ">
        {chunks.map((chunk, i) => (
          <div className="flex flex-col space-y-3 px-2" key={`col${i}`}>
            {chunk.map((tweet, index) => (
              <Card image={tweet} key={`tweet${index}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ image }: { image: string }) => (
  <div className="relative rounded-xl p-2 shadow-md hover:scale-[1.03] hover:shadow-lg transition-all">
    <img
      alt=""
      src={`/images/tweets/tweet-${image}.png`}
      className="mx-auto w-full h-full  object-cover"
    />
    <div className="absolute h-full w-2 bottom-0 right-0  bg-white p-2" />
  </div>
);
