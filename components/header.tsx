import Link from "next/link";
import { Logo } from "./logo";

const links = [
  // { label: "About", href: "/#about" },
  { label: "Tracks", href: "/#tracks" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Sponsors", href: "/#partners" },
  // { label: "About", href: "/#about" },
  { label: "Agenda", href: "/#agenda" },
  { label: "In Person Days", href: "/#in-person-days" },
  // { label: "Projects", href: "/#community-initiatives" },
  { label: "FAQ", href: "/#faq" },
];

export const Header = () => {
  return (
    <>
      <header className="px-4 sm:px-8 md:px-12 lg:px-24 relative z-[100]">
        <div className="relative z-[100] mx-auto flex max-w-screen-xl flex-col py-6 sm:py-8 lg:py-12 lg:flex-row lg:items-center lg:justify-between">
          <Link className="flex items-center text-2xl font-black" href="/">
            <Logo />
          </Link>

          <input className="peer hidden" type="checkbox" id="navbar-open" />
          <label
            className="absolute right-0 top-6 sm:top-8 cursor-pointer text-xl lg:hidden bg-white hover:bg-primary rounded-full px-3 py-2 border-2 border-black shadow-[-4px_4px_0_0_black] hover:shadow-none hover:translate-x-[-4px] hover:translate-y-[4px] transition-all"
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
            className="peer-checked:block hidden pl-2 py-6 lg:block lg:py-0"
          >
            <ul className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-4 xl:gap-x-8">
              {links.map((link, i) => (
                <li key={link.label} className="my-auto">
                  <Link
                    className="inline-block w-full text-center font-medium text-sm md:text-xs lg:text-sm xl:text-base bg-white hover:bg-primary rounded-full px-2 md:px-2 lg:px-3 py-1.5 lg:py-2 border-2 border-black shadow-[-4px_4px_0_0_black] lg:shadow-[-6px_6px_0_0_black] hover:shadow-none hover:translate-x-[-4px] hover:translate-y-[4px] lg:hover:translate-x-[-6px] lg:hover:translate-y-[6px] transition-all whitespace-nowrap"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};