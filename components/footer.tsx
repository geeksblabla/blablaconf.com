import React from "react";
import Link from "next/link";
import { LogoWhite } from "./logo";

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

type LinkSection = {
  category: string;
  items: LinkItem[];
};

const links: LinkSection[] = [
  {
    category: "Community",
    items: [
      {
        label: "geeksblabla.io",
        href: "https://geeksblabla.io",
        external: true,
      },
      { label: "stateofdev.ma", href: "https://stateofdev.ma", external: true },
      {
        label: "awesome-morocco.dev",
        href: "https://awesome-morocco.dev",
        external: true,
      },
    ],
  },
  {
    category: "Conference",
    items: [
      { label: "Tracks", href: "/#tracks" },
      { label: "Speakers", href: "/#speakers" },
      { label: "Agenda", href: "/#agenda" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    category: "Get Involved",
    items: [
      { label: "Join the team", href: "#" },
      { label: "Become a sponsor", href: "/#partners" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 md:py-16 border-t-8 border-primary">
      <div
        className="mx-auto max-w-screen-lg md:max-w-screen-xl px-5 md:px-10"
        data-sal="slide-up"
        data-sal-duration="800"
      >
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mb-12">
          {/* Logo & CTA */}
          <div className="flex flex-col items-center lg:items-start gap-8 max-w-md">
            <LogoWhite />
            <div>
              <h3 className="text-3xl text-white md:text-4xl font-bold text-center lg:text-left mb-2">
                Want to join?
              </h3>
              <p className="text-gray-400 text-lg text-center lg:text-left">
                Make sure to get your ticket and join 5 days of learning,
                networking and fun in Darija
              </p>
            </div>
            <a
              href="#register"
              className="inline-block mt-2 bg-white text-black border-4 border-black shadow-[-6px_6px_0_0_#ffe83c] text-xl font-bold px-6 py-3 rounded-full hover:bg-primary hover:shadow-none hover:-translate-x-[6px] hover:translate-y-[6px] transition-all"
            >
              Get Your Ticket
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 w-full sm:w-auto items-center sm:items-start">
            {links.map((section) => (
              <div
                key={section.category}
                className="flex flex-col gap-3 items-center sm:items-start text-center sm:text-left"
              >
                <h4 className="font-bold text-primary text-2xl mb-2">
                  {section.category}
                </h4>
                {section.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="text-gray-300 text-lg hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-base text-gray-500 text-center sm:text-left">
            <span>© 2025 Geeksblabla. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>
              Made with ❤️ by{" "}
              <span className="font-bold text-gray-300">Geeksblabla Team</span>
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <SocialLink
              href="https://www.youtube.com/c/GeeksBlaBla01"
              label="YouTube"
            >
              <path
                d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.46a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"
                fill="currentColor"
              />
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/company/geeksblabla-community/"
              label="LinkedIn"
            >
              <path
                d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                fill="currentColor"
              />
            </SocialLink>

            <SocialLink
              href="https://www.facebook.com/geeksblabla"
              label="Facebook"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                fill="currentColor"
              />
            </SocialLink>

            <SocialLink href="https://twitter.com/geeksblabla" label="Twitter">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              />
            </SocialLink>

            <SocialLink
              href="https://instagram.com/geeksblabla"
              label="Instagram"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </SocialLink>

            <SocialLink href="https://github.com/geeksblabla" label="GitHub">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                fill="currentColor"
              />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-primary hover:text-black transition-all"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  </a>
);
