import React from "react";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-3 xl:px-10">
        <div className="max-w-sm">
          <div className="mb-6 flex h-10 items-center space-x-2">
            <Logo />
          </div>
          <div className="text-gray-500 ">
            Want to join ? Make sure to get your ticket and join 5 days of
            learning, networking and fun in Darija
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Community</div>
          <nav aria-label="Guides Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a
                  className="hover:text-emerald-600 hover:underline"
                  href="https://geeksblabla.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  geeksblabla.com
                </a>
              </li>
              <li>
                <a
                  className="hover:text-emerald-600 hover:underline"
                  href="https://blablaconf.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  blablaconf.com
                </a>
              </li>
              <li>
                <a
                  className="hover:text-emerald-600 hover:underline"
                  href="https://github.com/DevC-Casa/awesome-morocco"
                  target="_blank"
                  rel="noreferrer"
                >
                  awesome-morocco.dev
                </a>
              </li>
              <li>
                <a
                  className="hover:text-emerald-600 hover:underline"
                  href="https://tally.so/r/meqj6E"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join the team
                </a>
              </li>
              <li>
                <a
                  className="hover:text-emerald-600 hover:underline"
                  href="https://links.geeksblabla.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  More
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Stay in touch</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a
                  className="hover:text-emerald-600 hover:underline"
                  href="https://www.youtube.com/c/GeeksBlaBla01"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className="hover:text-emerald-600 hover:underline"
                  href="https://www.linkedin.com/company/geeksblabla/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className="hover:text-emerald-600 hover:underline"
                  href="https://www.facebook.com/geeksblabla"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="hover:text-emerald-600 hover:underline"
                  href="https://twitter.com/geeksblabla"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="hover:text-emerald-600 hover:underline"
                  href="https://instagram.com/geeksblabla"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="hover:text-emerald-600 hover:underline"
                  href="https://github.com/devc-casa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
          <p className="">Made with ❤️ by Geeksblabla Team</p>
          <p className="">© 2022 Geeksblabla | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
