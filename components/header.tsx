import Link from "next/link";
import { Logo } from "./logo";

const links = [
  // { label: "About", href: "/#about" },
  { label: "Tracks", href: "/#tracks" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Agenda", href: "/#agenda" },
  { label: "In Person Days", href: "/#day-5" },
  { label: "FAQ", href: "/#faq" },
  { label: "Sponsors", href: "/#sponsors" },
];

export const Header = () => {
  return (
    <>
      {/* <Banner /> */}
      <header className="px-4 ">
        <div className="relative mx-auto flex max-w-screen-lg md:max-w-screen-xl flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            className="flex items-center text-2xl font-black sm:hidden"
            href="/"
          >
            <Logo />
          </Link>
          <input className="peer hidden" type="checkbox" id="navbar-open" />
          <label
            className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
            htmlFor="navbar-open"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.88em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0 mx-auto"
          >
            <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-10">
              {links.map((link, i) => (
                <>
                  <li
                    key={link.label}
                    className="my-auto "
                    // data-sal={i > 3 ? "slide-right" : "slide-left"}
                    data-sal="fade"
                    data-sal-delay={`${Math.abs(i - 3) * 100}`}
                    data-sal-duration="1000"
                  >
                    <a
                      className="text-[#3F2617]/70 font-medium text-xl hover:text-[#3F2617] "
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                  {i === 2 && (
                    <li className="sm:flex hidden">
                      <Link
                        className=" items-center text-2xl font-black mx-8"
                        href="/"
                      >
                        <Logo />
                      </Link>
                    </li>
                  )}
                </>
              ))}
              {/* <li className="mt-2 sm:mt-0">
              <a
                className="rounded-2xl border-2 border-gray-400 px-6 py-2 font-medium text-gray-600 "
                href="#"
              >
                Watch Sessions on youtube
              </a>
            </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

const Banner = () => {
  return (
    <div className="bg-lime-600 text-white fixed w-full z-40">
      <div className="mx-auto max-w-7xl px-2 py-3 sm:px-4 sm:py-2 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center  ">
            <p className="ml-3 text-center font-medium leading-5 mx-auto ">
              <span className="sm:text-lg text-base">
                <span className="rounded-md bg-amber-500 px-2 mr-2 text-white">
                  Ready !!!
                </span>{" "}
                BlaBlaConf 2024 CFP in now open!{" "}
                <a
                  className="underline font-bold"
                  href="https://cfp.blablaconf.com"
                >
                  {" "}
                  Submit your talk now!
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
