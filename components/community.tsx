import Image from "next/image";
import imageSrc from "../images/community-people.webp";

export const Community = () => {
  return (
    <section id="about" className=" py-16">
      <div className=" relative  mx-auto flex flex-col-reverse sm:max-w-xl md:max-w-screen-xl md:flex-row px-4 md:px-0  content-between items-center">
        <div
          className="flex-1  pr-4 flex-col flex max-w-xl lg:max-w-screen-xl"
          data-sal="slide-right"
          data-sal-delay="100"
          data-sal-duration="400"
        >
          <div className="max-w-screen-md ">
            <h2 className="text-5xl font-bold my-4 text-gradient md:text-left text-center">
              Made By The Community For The Community
            </h2>
            <p className="text-xl font-[400] text-[#282828]/60 capitalize md:text-left text-center">
              By the Moroccan developer community, for the Moroccan developer
              community, BlaBlaConf is your one-stop shop for the latest and
              hottest technology trends, in Darija, and completely free! Join us
              from{" "}
              <span className="font-bold text-gradient">
                {" "}
                19th to 23th February{" "}
              </span>
              .
              <br />
            </p>
          </div>
          <div className=" flex md:flex-row flex-row justify-around flex-wrap md:space-x-12 pb-10 md:justify-start md:items-start  items-center md:text-left text-center mt-6">
            <div className="flex-col space-y-4 py-3 ">
              <p className="text-3xl font-[400] capitalize text-[#525252]">
                speakers
              </p>
              <p className="text-6xl font-bold  text-gradient capitalize">
                60+
              </p>
            </div>
            <div className="flex-col space-y-4 py-3 ">
              <p className="text-3xl font-semibold capitalize text-[#525252]">
                hours
              </p>
              <p className="text-6xl font-bold  text-gradient capitalize">
                40+
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
        <div
          className="flex flex-1 h-full  md:justify-end justify-center "
          data-sal="slide-left"
          data-sal-delay="100"
          data-sal-duration="400"
        >
          <Image
            className="h-full object-cover "
            src={imageSrc}
            alt="Geeksblabla community "
          />
        </div>
      </div>
    </section>
  );
};
