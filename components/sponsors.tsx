export const Sponsors = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-screen-lg px-8 pt-20 pb-16 text-gray-700 md:pt-24 md:pb-20">
        <div className="flex flex-wrap">
          <div className="w-full max-w-full flex-shrink-0 lg:mt-2 lg:w-1/3 lg:flex-none">
            <h2 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl capitalize ">
              Our Sponsors
            </h2>
            <p className=" text-lg font-medium text-gray-600 leading-normal max-w-[350px]  ">
              We are grateful to our sponsors for their support and contribution
            </p>
          </div>
          <div className="w-full  max-w-full pt-10 lg:w-2/3 lg:flex-none lg:px-8 lg:py-0 ">
            <div className="h-full flex flex-row justify-start items-end ">
              <div className="w-60 px-6 ">
                <img src="/images/sponsors/obytes.png" alt="" className="" />
              </div>
              <div className="w-60  px-6 ">
                <img src="/images/sponsors/1337.png" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
