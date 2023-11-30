/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";

export const TicketInput = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
  };
  return (
    <>
      <form
        action="/api/register"
        onSubmit={onSubmit}
        method="POST"
        className="mx-auto mt-8 flex max-w-md w-full flex-col border-gray-600 sm:bg-gray-200 bg-transparent sm:flex-row sm:rounded-full "
      >
        <input
          className="m-2 h-12 rounded-full px-4  sm:w-full  bg-transparent sm:border-slate-100 border md:border-none hidden"
          placeholder="Enter your email"
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
          required
        />
        {/* <button className="shrink-0 m-2 rounded-full bg-[#006233] px-8 py-3 font-medium text-white focus:bg-[#006233] focus:outline-none hover:bg-[#006233]">
          {loading ? (
            "Loading Ticket ..."
          ) : (
            <>
              <span className="pl-1"> قطع </span>
              <span> ورقتك </span>
            </>
          )}

        </button> */}
        <a
          href="https://www.youtube.com/watch?v=XFb24kcdSKk&list=PLUa7iphNQNrwuQVs4qk_TCo5X-2cFQkGF"
          className=" text-center shrink-0 m-2 rounded-full bg-[#006233] px-8 py-3 font-medium text-white focus:bg-[#006233] focus:outline-none hover:bg-[#006233] w-full"
        >
          <span> تفرج مع رسك </span>
        </a>
      </form>

      {/* <p className=" text-xs text-gray-400 mt-1">
        We promise we won't spam you
      </p> */}
    </>
  );
};
