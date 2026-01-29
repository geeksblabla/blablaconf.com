import Image from "next/image";
import imageSrc from "@/images/community-gallery.png";
import communityTitle from "@/images/titles/community.svg";

const stats = [
  { label: "Speakers", value: "60+" },
  { label: "Hours", value: "40+" },
  { label: "Views", value: "100k+" },
];

export const Community = () => {
  return (
    <section id="about" className="py-16 px-5 sm:px-20 lg:py-24">
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div
            className="flex-1 flex flex-col items-center lg:items-start"
            data-sal="slide-right"
            data-sal-duration="800"
          >
            <Image
              src={communityTitle}
              alt="community title"
              className="mx-auto lg:mx-0"
            />

            {/* Mobile Image */}
            <div className="lg:hidden mt-8">
              <Image
                src={imageSrc}
                alt="Geeksblabla community"
                className="w-full h-auto"
              />
            </div>

            <p className="text-center lg:text-left mx-auto lg:mx-0 max-w-2xl text-xl pt-6 font-bold [-webkit-text-stroke:8px_white] [paint-order:stroke_fill] pb-6">
              By the Geeksblabla community, for the Moroccan developer
              community, BlaBlaConf is your one-stop shop for the latest and
              hottest technology trends, in Darija, and completely free! Join us
              from{" "}
              <span className="font-bold text-secondary">
                03th to 07th February
              </span>
              .
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center py-4 px-8 rounded-[2rem] bg-primary border-[3px] border-black shadow-[-6px_6px_0_0_black] "
                >
                  <p className="text-lg font-bold text-black uppercase">
                    {stat.label}
                  </p>
                  <p className="text-4xl font-black text-black">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Image */}
          <div
            className="hidden lg:flex flex-1 justify-end"
            data-sal="slide-left"
            data-sal-duration="800"
          >
            <Image
              src={imageSrc}
              alt="Geeksblabla community"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
