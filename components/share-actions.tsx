"use client";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import { useState, useEffect, SVGProps } from "react";

const share_message = `ياله خديت التيكي ديالي باش نحضر بلابلاكونف اللي منضمة من طرف الكومينوتي غيغس بلابلا. اش مازال كتسنى، بالي قبل ما يسالي و قطع ورقتك حتى نتا
 @geeksblabla  #blablaconf `;

const copyToClipboard = (str: string) => {
  const el = document.createElement("textarea");
  el.value = `${share_message}
  ${str} `;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

export const ShareActions = ({ shareUrl }: { shareUrl: string }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 2000);
  }, [copied]);

  return (
    <div className="flex md:flex-row flex-col items-center mt-4">
      <button
        className="text-white px-6 py-2 rounded-md bg-tertiary text-base min-w-[110px] text-center self-end shadow-[3px_3px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000000] transition-all duration-300 border-2 border-black"
        onClick={() => {
          setCopied(true);
          copyToClipboard(shareUrl);
        }}
      >
        {copied ? "Link Copied" : "Copy Ticket URL"}
      </button>
      <div className="flex md:flex-row flex-col justify-center items-center">
        <p className="mx-2 md:my-0 my-2">Or share on </p>
        <div className="flex gap-2">
          <FacebookShareButton
            url={shareUrl}
            className="text-white border-2 border-black px-4 py-2 rounded-md !bg-tertiary text-base text-center shadow-[3px_3px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000000] transition-all duration-300"
          >
            <Facebook className="text-white" />
          </FacebookShareButton>
          <TwitterShareButton
            url={shareUrl}
            title={share_message}
            className="text-white border-2 border-black px-4 py-2 rounded-md !bg-tertiary text-base text-center shadow-[3px_3px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000000] transition-all duration-300"
          >
            <Twitter className="text-white" />
          </TwitterShareButton>
          <LinkedinShareButton
            url={shareUrl}
            className="text-white border-2 border-black px-4 py-2 rounded-md !bg-tertiary text-base text-center shadow-[3px_3px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000000] transition-all duration-300"
            windowWidth={750}
            windowHeight={600}
          >
            <Linkedin className="text-white" />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export function Twitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} {...props}>
      <path
        d="M27.546 15.508a6.489 6.489 0 01-1.833.503 3.218 3.218 0 001.403-1.768 6.595 6.595 0 01-2.029.769 3.193 3.193 0 00-5.441 2.909 9.043 9.043 0 01-6.582-3.327 3.129 3.129 0 00-.432 1.606c0 1.11.565 2.085 1.42 2.658a3.183 3.183 0 01-1.446-.4v.04a3.195 3.195 0 002.561 3.133 3.24 3.24 0 01-1.435.055 3.204 3.204 0 002.988 2.218 6.404 6.404 0 01-3.96 1.366c-.254 0-.506-.015-.76-.044a9.083 9.083 0 004.904 1.434c5.877 0 9.086-4.865 9.086-9.077 0-.135 0-.272-.01-.409a6.448 6.448 0 001.597-1.653l-.03-.013z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} {...props}>
      <path
        d="M18.184 20.702V28h2.612v-7.289h2.177l.325-2.85h-2.502v-1.815c0-.825.204-1.391 1.251-1.391h1.34v-2.544a16.09 16.09 0 00-1.95-.111c-1.93 0-3.253 1.324-3.253 3.758v2.1H16v2.844h2.184z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} {...props}>
      <path
        d="M26.999 27H24.1v-4.547c0-1.085-.02-2.48-1.508-2.48-1.51 0-1.74 1.18-1.74 2.4V27h-2.899v-9.352h2.783v1.278h.039a3.052 3.052 0 012.745-1.51c2.938 0 3.48 1.936 3.48 4.454L26.999 27zM14.682 16.37a1.68 1.68 0 01-1.554-1.04 1.687 1.687 0 011.226-2.298 1.68 1.68 0 012.01 1.653 1.689 1.689 0 01-1.038 1.557 1.68 1.68 0 01-.644.128zM16.132 27H13.23v-9.352h2.902V27z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Link(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} scale={0.5} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M7.438 16.562a1.496 1.496 0 002.122 0l7.002-7.002a1.5 1.5 0 10-2.122-2.122L7.438 14.44a1.5 1.5 0 000 2.122zm3.501 3.078a4.658 4.658 0 01-6.58 0 4.657 4.657 0 010-6.579l3.29-3.29L5.528 7.65l-3.29 3.29c-2.984 2.984-2.984 7.839 0 10.823A7.633 7.633 0 007.65 24c1.96 0 3.92-.746 5.411-2.238l3.29-3.29-2.122-2.122-3.29 3.29zM21.762 2.238c-2.983-2.984-7.839-2.984-10.823 0l-3.29 3.29L9.771 7.65l3.29-3.29A4.636 4.636 0 0116.35 3a4.64 4.64 0 013.29 1.361 4.657 4.657 0 010 6.579l-3.29 3.29 2.122 2.122 3.29-3.29c2.984-2.985 2.984-7.84 0-10.824z"
          fill="#8F85C1"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Github(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.662 1C5.248 1 0 6.13 0 12.4c0 4.987 3.353 9.261 8.017 10.829.584.142.73-.285.73-.57v-1.995c-3.208.712-3.937-1.425-3.937-1.425-.583-1.283-1.311-1.71-1.311-1.71-1.02-.712.145-.712.145-.712 1.166.142 1.75 1.14 1.75 1.14 1.02 1.852 2.77 1.282 3.352.997.146-.712.438-1.282.73-1.567-2.625-.285-5.249-1.283-5.249-5.7 0-1.282.438-2.28 1.167-2.992-.146-.285-.584-1.425.145-2.993 0 0 1.02-.285 3.207 1.14.875-.285 1.895-.427 2.916-.427 1.02 0 2.04.142 2.915.427 2.187-1.425 3.207-1.14 3.207-1.14.583 1.568.292 2.708.146 2.993.729.855 1.166 1.852 1.166 2.992 0 4.417-2.77 5.272-5.393 5.557.437.57.874 1.282.874 2.28v3.135c0 .285.146.712.875.57 4.665-1.568 8.017-5.842 8.017-10.83C23.323 6.13 18.076 1 11.662 1z"
        fill="currentColor"
      />
    </svg>
  );
}
