import Image from "next/image";
import I1337Src from "../images/sponsors/1337.png";
import intelciaSrc from "../images/sponsors/intelcia.png";
import sponsorsTitle from "../images/titles/partners.png";
export const Sponsors = () => {
  return (
    <>
      <section
        id="partners"
        className="relative py-16 px-4 bg-gradient-to-r bg-[#E9D1AD] text-white"
      >
        <div className="mx-auto max-w-screen-xl mb-10 pt-8 md:mb-16 md:px-8 px-4">
          <div className="mx-auto ">
            <Image
              ata-sal="fade"
              data-sal-delay="100"
              data-sal-duration="500"
              src={sponsorsTitle}
              alt="sponsors title"
              className="mx-auto md:max-h-[140px] max-h-[110px] object-contain"
            />
            <p
              className="mb-12 text-base   text-[#282828]/60 text-center font-[400]  leading-normal max-w-[650px] mx-auto pt-4 "
              ata-sal="fade"
              data-sal-delay="100"
              data-sal-duration="500"
            >
              This event is made possible by the support of our amazing partners
              ❤️ 💚
              <br />
              Want to support and sponsor BlablaConf,{" "}
              <a
                className="underline"
                href="https://linkedin.com/company/geeksblabla-community"
                target="_blank"
              >
                Get In Touch
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl pt-10 mt-10  lg:flex-none lg:px-8 lg:py-0">
          <div className="mx-auto h-full flex md:flex-row flex-col justify-center items-center  flex-warp ">
            {/* <a
              href="https://1337.ma"
              target="_blank"
              className="block w-fit bg-white/30  rounded-full px-8 py-5 hover:scale-105 cursor-pointer transition-all"
              rel="noreferrer"
            >
              <Image
                src={I1337Src}
                alt=""
                className="h-[50px] w-auto  mx-auto"
              />
            </a> */}
            <div className="text-center text-[#282828]/60 text-lg">
              هد الساعة بقي مكاين والو 😂.الى مهتم تكون سبونسور{" "}
              <a
                href="https://linkedin.com/company/geeksblabla-community"
                className="underline"
                target="_blank"
              >
                تواصل معانا
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
