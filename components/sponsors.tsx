import Image from "next/image";
import I1337Src from "../images/sponsors/1337.png";
import intelciaSrc from "../images/sponsors/intelcia.png";
import makenessLogoSrc from "../images/sponsors/makeness-logo.png";
import sponsorsTitle from "../images/titles/sponsors.svg";
import Link from "next/link";

type Sponsor = {
  name: string;
  logo: any;
  url: string;
};

const sponsors: Sponsor[] = [
  { name: "Makeness", logo: makenessLogoSrc, url: "https://makeness.dev" },
  // { name: "1337", logo: I1337Src, url: "https://1337.ma" },
  // { name: "Intelcia", logo: intelciaSrc, url: "https://intelcia.com" },
];

export const Sponsors = () => {
  return (
    <section
      id="partners"
      className="relative py-16 px-5 sm:px-20 lg:py-24 bg-tertiary"
    >
      <div className="mx-auto max-w-screen-lg md:max-w-screen-xl">
        <div className="title-style leading-[0.8]">
          <span className="mx-auto text-primary">المساند الرسمي</span>
          <span className="mx-auto text-secondary">Sponsors</span>
        </div>
        <p className="text-center mx-auto max-w-2xl text-xl pt-6 font-bold [-webkit-text-stroke:8px_white] [paint-order:stroke_fill] pb-10">
          This event is made possible by the support of our amazing partners ❤️
          💚
          <br />
          Want to support and sponsor BlablaConf?{" "}
          <Link
            className="underline hover:text-secondary transition-colors"
            href="https://linkedin.com/company/geeksblabla-community"
            target="_blank"
            rel="noreferrer"
          >
            Get In Touch
          </Link>
        </p>

        {/* Sponsors Grid */}
        {sponsors.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {sponsors.map((sponsor, index) => (
              <Link
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center p-8 bg-white rounded-2xl border-[3px] border-black shadow-[-6px_6px_0_0_black] hover:shadow-none hover:translate-x-[-6px] hover:translate-y-[6px] transition-all duration-300 w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-[120px] w-auto object-contain transition-transform duration-300"
                />
              </Link>
            ))}
          </div>
        ) : (
          /* No Sponsors Yet Card */
          <div className="flex flex-col items-center justify-center mt-8">
            <div className="bg-white rounded-[2rem] border-[3px] border-black shadow-[-8px_8px_0_0_black] p-8 md:p-12 max-w-2xl w-full text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-4">
                Become a Sponsor!
              </h3>
              <p className="text-black/70 text-lg mb-6 [-webkit-text-stroke:0] font-normal">
                هد الساعة بقي مكاين والو 😂
                <br />
                الى مهتم تكون سبونسور، تواصل معانا!
              </p>
              <Link
                href="https://linkedin.com/company/geeksblabla-community"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-black font-bold text-lg px-8 py-4 rounded-full border-[3px] border-black shadow-[-4px_4px_0_0_black] hover:shadow-none hover:translate-x-[-4px] hover:translate-y-[4px] transition-all duration-300"
              >
                <span>Contact Us</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
