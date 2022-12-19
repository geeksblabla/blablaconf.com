import Image from "next/image";

export const Sponsors = () => {
  return (
    <section id="sponsors" className="bg-gray-100">
      <div className="md:text-left text-center mx-auto max-w-screen-lg px-8 pt-20 pb-16 text-gray-700 md:pt-24 md:pb-20">
        <div className="flex flex-wrap">
          <div className="w-full max-w-full flex-shrink-0 lg:mt-2  lg:flex-none">
            <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl capitalize  ">
              Our Sponsors
            </h2>
            <p className=" text-lg font-medium text-gray-600 leading-normal  ">
              We are grateful to our sponsors for their support and contribution
            </p>
            <p className=" text-sm font-medium text-gray-500 leading-normal   ">
              Want to support and sponsor BlablaConf,{" "}
              <a className="underline" href="mailto:geeksblabla@gmail.com">
                Get In Touch
              </a>{" "}
            </p>
          </div>
          <div className="w-full  max-w-full pt-10 mt-10  lg:flex-none lg:px-8 lg:py-0">
            <div className="h-full flex md:flex-row flex-col justify-start items-center md:items-end flex-warp ">
              <a
                href="https://obytes.com"
                target="_blank"
                className="py-6 w-60 px-6  hover:scale-105 cursor-pointer transition-all"
                rel="noreferrer"
              >
                <Image
                  height={40}
                  width={150}
                  src="/images/sponsors/obytes.png"
                  alt=""
                  className=""
                />
              </a>
              <a
                href="https://1337.ma"
                target="_blank"
                className="py-6 w-60 px-6  hover:scale-105 cursor-pointer transition-all"
                rel="noreferrer"
              >
                <Image
                  height={40}
                  width={150}
                  src="/images/sponsors/1337.png"
                  alt=""
                  className=""
                />
              </a>
              <a
                href="https://1337.ma"
                target="_blank"
                className="py-6 w-60 px-6  hover:scale-105 cursor-pointer transition-all"
                rel="noreferrer"
              >
                <Image
                  height={40}
                  width={150}
                  src="/images/sponsors/youcode.png"
                  alt=""
                  className=""
                />
              </a>
              <a
                href="https://emsi.ma"
                target="_blank"
                className="py-6 w-60 px-6  hover:scale-105 cursor-pointer transition-all"
                rel="noreferrer"
              >
                <Image
                  height={40}
                  width={150}
                  src="/images/sponsors/emsi.png"
                  alt=""
                  className=""
                />
              </a>
              <a
                href="https://google.com"
                target="_blank"
                className="py-6 w-56 px-6  hover:scale-105 cursor-pointer transition-all"
                rel="noreferrer"
              >
                <Image
                  height={35}
                  width={150}
                  src="/images/sponsors/google.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
