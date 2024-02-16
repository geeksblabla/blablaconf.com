import Image from "next/image";
import I1337Src from "../images/sponsors/1337.png";
import intelciaSrc from "../images/sponsors/intelcia.png";

export const Sponsors = () => {
  return (
    <>
      <section
        id="partners"
        className="relative py-16 px-4 bg-gradient-to-r from-[#9E735A] to-[#A77A60] text-white"
      >
        <div className="mx-auto max-w-screen-xl mb-10 pt-8 md:mb-16 md:px-8 px-4">
          <h2
            className="mb-4 text-6xl font-bold md:mb-6 md:text-6xl capitalize text-center"
            ata-sal="fade"
            data-sal-delay="100"
            data-sal-duration="500"
          >
            Our Partners
          </h2>
          <p
            className="mb-12 text-xl text-center font-[400]  leading-normal max-w-[650px] mx-auto "
            ata-sal="fade"
            data-sal-delay="100"
            data-sal-duration="500"
          >
            This event is made possible by the support of our amazing partners
            ❤️ 💚
            <br />
            Want to support and sponsor BlablaConf,{" "}
            <a className="underline" href="mailto:geeksblabla@gmail.com">
              Get In Touch
            </a>{" "}
          </p>
        </div>
        <div className="mx-auto max-w-screen-xl pt-10 mt-10  lg:flex-none lg:px-8 lg:py-0">
          <div className="mx-auto h-full flex md:flex-row flex-col justify-center items-center  flex-warp ">
            <a
              href="https://1337.ma"
              target="_blank"
              className="py-8 md:w-80 w-[60%] md:mx-16 mx-0   hover:scale-105 cursor-pointer transition-all"
              rel="noreferrer"
            >
              <Image
                height={200}
                width={551}
                src={I1337Src}
                alt=""
                className=" "
              />
            </a>
            <a
              href="https://www.intelcia.com/"
              target="_blank"
              className="py-8 md:w-80 w-[60%] md:mx-16 mx-0  hover:scale-105 cursor-pointer transition-all"
              rel="noreferrer"
            >
              <Image
                height={144}
                width={549}
                src={intelciaSrc}
                alt=""
                className=""
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
