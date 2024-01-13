import Image from "next/image";

export const Community = () => {
  return (
    <section id="about" className=" py-16">
      <div className=" relative  mx-auto flex flex-col-reverse sm:max-w-xl md:max-w-screen-xl md:flex-row px-4 md:px-0  content-between items-center">
        <div className="flex-1  pr-4 flex-col flex max-w-xl lg:max-w-screen-xl">
          <div className="max-w-screen-md ">
            <h2 className="text-5xl font-bold my-4 text-gradient md:text-left text-center">
              Made By The Community For The Community
            </h2>
            <p className="text-xl font-[400] text-[#282828]/60 capitalize md:text-left text-center">
              By the Moroccan developer community, for the Moroccan developer
              community, BlaBlaConf is your one-stop shop for the latest and
              hottest technology trends, in Darija, and completely free! Join us
              from 19th to 23th December.
              <br />
            </p>
          </div>
          <div className=" flex md:flex-row flex-row justify-around flex-wrap md:space-x-12 pb-10 md:justify-start md:items-start  items-center md:text-left text-center mt-6">
            <div className="flex-col space-y-4 py-3 ">
              <p className="text-3xl font-[400] capitalize text-[#525252]">
                speakers
              </p>
              <p className="text-6xl font-bold  text-gradient capitalize">
                40+
              </p>
            </div>
            <div className="flex-col space-y-4 py-3 ">
              <p className="text-3xl font-semibold capitalize text-[#525252]">
                hours
              </p>
              <p className="text-6xl font-bold  text-gradient capitalize">
                30+
              </p>
            </div>
            <div className="flex-col space-y-4 py-3">
              <p className="text-3xl font-semibold capitalize text-[#525252]">
                views
              </p>
              <p className="text-6xl font-bold  text-gradient capitalize">
                100k+
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 h-full  md:justify-end justify-center ">
          <Image
            width={688}
            height={389}
            className="h-full object-cover "
            src="/images/community-3.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export const Community1 = () => {
  return (
    <div className="mx-auto max-w-screen-lg my-24">
      <div className="max-w-screen-md">
        <h2 className="text-3xl font-bold my-4">
          Made By The Community For The Community
        </h2>
        <p className="text-base font-medium text-gray-600 capitalize">
          By the Moroccan developer community, for the Moroccan developer
          community, BlaBla Conf is your one-stop-shop for the latest and
          hottest technology trends, in Darija, and completely free! Join us
          from 19th to 23th December.
          <br />
        </p>
      </div>
      <div className="inline-flex space-x-24 items-start justify-start mt-6">
        <div className="inline-flex flex-col space-y-2 items-start justify-center">
          <p className="text-xl font-semibold text-center capitalize">
            speakers
          </p>
          <p className="text-5xl font-semibold text-center text-green-800 capitalize">
            40+
          </p>
        </div>
        <div className="inline-flex flex-col space-y-2 items-start justify-center">
          <p className="text-xl font-semibold text-center capitalize">hours</p>
          <p className="text-5xl font-semibold text-center text-green-800 capitalize">
            30+
          </p>
        </div>
        <div className="inline-flex flex-col space-y-2 items-start justify-center">
          <p className="text-xl font-semibold text-center capitalize">views</p>
          <p className="text-5xl font-semibold text-center text-green-800 capitalize">
            100k+
          </p>
        </div>
      </div>
    </div>
  );
};
