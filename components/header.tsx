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
      <header className="px-4 relative z-[100]">
        <div className="relative z-[100] mx-auto flex max-w-screen-xl flex-col py-12 sm:flex-row sm:items-center sm:justify-between">
          <Link className="flex items-center text-2xl font-black" href="/">
            <Logo />
          </Link>

          <input className="peer hidden" type="checkbox" id="navbar-open" />
          <label
            className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden bg-white hover:bg-primary rounded-full px-3 py-2 border-2 border-black shadow-[-6px_6px_0_0_black] hover:shadow-none hover:translate-x-[-6px] hover:translate-y-[6px] transition-all"
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
            className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
          >
            <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 xl:gap-x-10">
              {links.map((link, i) => (
                <li key={link.label} className="my-auto">
                  <Link
                    className="inline-block w-full text-center font-medium text-xs lg:text-lg bg-white hover:bg-primary rounded-full px-3 py-2 border-2 border-black shadow-[-6px_6px_0_0_black] hover:shadow-none hover:translate-x-[-6px] hover:translate-y-[6px] transition-all"
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