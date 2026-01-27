import Image from "next/image";
import blablacan from "@/images/blablacan.svg";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center -mt-36 pb-16 px-4 overflow-hidden min-h-[70vh]">
      {/* Main Logo Container */}
      <div className="w-full max-w-[1000px]">
        <Image
          src={blablacan}
          alt="BlaBlaCan"
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center z-10 gap-8 items-center -mt-48">
        {/* YouTube Button */}
        <a
          href="https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-3 text-2xl md:text-4xl font-black px-6 py-4 bg-secondary hover:bg-black text-white hover:text-secondary border-4 border-black shadow-[-8px_8px_0_0_black] hover:translate-x-[-8px] hover:translate-y-[8px] hover:shadow-[0] transition-all">
            تفرج فيوتوب
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </button>
        </a>
        {/* Discovery Button */}
        <button className="flex items-center gap-3 text-2xl md:text-4xl font-black px-6 py-4 bg-primary hover:bg-black text-black hover:text-primary border-4 border-black shadow-[-8px_8px_0_0_black] hover:translate-x-[-8px] hover:translate-y-[8px] hover:shadow-[0] transition-all">
          اكتاشف
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
          </svg>
        </button>
      </div>
    </section>
  );
};
