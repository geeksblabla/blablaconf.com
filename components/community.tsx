import Image from "next/image";

export const Community = () => {
  return (
    <section id="about" className=" py-16">
      <div className=" relative  mx-auto flex flex-col sm:max-w-xl md:max-w-screen-xl md:flex-row md:px-8 px-4">
        <div className="mx-auto  flex-col flex w-full max-w-xl lg:max-w-screen-xl">
          <div className="max-w-screen-md ">
            <h2 className="text-3xl font-bold my-4">
              Made By The Community For The Community
            </h2>
            <p className="text-base font-medium text-gray-600 capitalize">
              By the Moroccan developer community, for the Moroccan developer
              community, BlaBlaConf is your one-stop shop for the latest and
              hottest technology trends, in Darija, and completely free! Join us
              from 19th to 23th December.
              <br />
            </p>
          </div>
          <div className=" flex md:flex-row flex-col flex-wrap md:space-x-12 pb-10 md:justify-start md:items-start justify-center items-center md:text-left text-center mt-6">
            <div className="flex-col space-y-4 py-3 ">
              <p className="text-xl font-semibold capitalize">speakers</p>
              <p className="text-5xl font-semibold  text-green-800 capitalize">
                40+
              </p>
            </div>
            <div className="flex-col space-y-4 py-3 ">
              <p className="text-xl font-semibold capitalize">hours</p>
              <p className="text-5xl font-semibold  text-green-800 capitalize">
                30+
              </p>
            </div>
            <div className="flex-col space-y-4 py-3">
              <p className="text-xl font-semibold capitalize">views</p>
              <p className="text-5xl font-semibold  text-green-800 capitalize">
                100k+
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full md:justify-end justify-center">
          <div className=" items-center space-y-3 lg:flex md:scale-110 scale-100">
            <Image
              width={500}
              height={800}
              className="h-full object-cover "
              src="/images/team.jpg"
              alt=""
            />
          </div>
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
