import Image from "next/image";
import imageSrc from "@/images/community-gallery.png";
import communityTitle from "@/images/titles/community.png";

export const Community = () => {
  return (
    <section id="about" className=" py-16">
      <div className=" relative  mx-auto flex flex-col-reverse sm:max-w-xl md:max-w-screen-xl md:flex-row justify-center  px-4 md:px-0  content-center items-center">
        <div
          className="flex-1 pr-4 pt-10 h-full flex-col flex max-w-xl lg:max-w-screen-xl"
          data-sal="slide-right"
          data-sal-delay="100"
          data-sal-duration="400"
        >
          <div className="max-w-screen-md">
            <Image
              src={communityTitle}
              alt="community title"
              className="md:max-h-[140px] max-h-[110px] object-contain md:self-start self-center md:mx-0 mx-auto w-fit"
            />

            <div
              className=" flex-1 w-full mx-auto  md:justify-end justify-center md:hidden flex "
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
            <p className="text-lg mt-4 font-[400] text-[#282828]/60 capitalize md:text-left text-center max-w-[500px]">
              By the Geeksblabla community, for the Moroccan developer
              community, BlaBlaConf is your one-stop shop for the latest and
              hottest technology trends, in Darija, and completely free! Join us
              from{" "}
              <span className="font-bold text-[#D55848]">
                {" "}
                03th to 07th February{" "}
              </span>
              .
              <br />
            </p>
          </div>
          <div className=" flex md:flex-row flex-row justify-around flex-wrap md:space-x-3  pb-10 md:justify-start md:items-start  items-center md:text-left text-center mt-6">
            <div className="flex-col my-2  py-2 px-6 bg-[#53925E] rounded-md shadow-[3px_3px_0px_0px_#000000] border-2 border-black">
              <p className="text-2xl font-[400] capitalize text-white">
                speakers
              </p>
              <p className="text-4xl font-bold  text-white capitalize">60+</p>
            </div>
            <div className="flex-col my-2 py-2 px-6 bg-[#53925E] rounded-md shadow-[3px_3px_0px_0px_#000000] border-2 border-black">
              <p className="text-2xl font-semibold capitalize text-white">
                hours
              </p>
              <p className="text-4xl font-bold  text-white capitalize">40+</p>
            </div>
            <div className="flex-col my-2 py-2 px-6 bg-[#53925E] rounded-md shadow-[3px_3px_0px_0px_#000000] border-2 border-black">
              <p className="text-2xl font-semibold capitalize text-white">
                views
              </p>
              <p className="text-4xl font-bold  text-white capitalize">100k+</p>
            </div>
          </div>
        </div>
        <div
          className=" flex-1 h-full  md:justify-end justify-center hidden md:flex "
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
