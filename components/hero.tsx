import Image from "next/image";
import { DateConf } from "./date-conf";
import { TicketInput } from "./ticket-input";

//bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-200
export const Hero = () => {
  return (
    <div className="relative  bg-opacity-90 py-16 md:pt-16 md:pb-36 pt-8 bg-gradient-to-r from-gray-100/60 via-gray-100 to-gray-200 ">
      <Image
        fill
        sizes="(max-width: 640px) 640px, 100vw"
        src="/back.png"
        className="absolute inset-0 h-full w-full object-cover"
        alt=""
      />
      <svg
        className="absolute inset-x-0 -bottom-1 text-white"
        viewBox="0 0 1160 163"
      >
        <path
          fill="currentColor"
          d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
        ></path>
      </svg>
      <div className="relative mx-auto max-w-screen-lg md:max-w-screen-xl  flex flex-col justify-center items-center  md:px-8 px-4 ">
        <DateConf className="bg-gray-200" />
        <div className="mx-auto flex justify-center mt-2 font-sans w-full max-w-[800px] ">
          <p className="lg:text-6xl md:text-5xl text-4xl font-bold leading-normal md:leading-normal   text-center">
            <span className="text-[#C1272D]"> العشية تعاشات</span>، الخيم تعلات،
            الخيل تسرجات،
            <span className="text-[#006233]"> و خمسيام د لموسم قربـــــات</span>
          </p>
        </div>
        <Image
          src="/blablaconf-taxi.png"
          alt="BlablaConf Taxi"
          width={700}
          height={700}
          className="mx-auto mt-16 rounded-xl"
        />
        <TicketInput />
      </div>
    </div>
  );
};
