import type { NextSeoProps } from "next-seo";

const host = process.env.NEXT_PUBLIC_HOST;
export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title:
    "BlaBlaConf 22 | 5+1 Days and 5+1 Tracks Covering Hottest Technology Trends in Darija",
  description:
    "By the Moroccan developer community, for the Moroccan developer community, BlaBla Conf is your one stop shop for latest and hottest technology trends, in Darija, and completely free! Join us from 19th to 24th October",
  canonical: `${host}/`,
  openGraph: {
    title:
      "BlaBlaConf 22 | 5+1 Days and 5+1 Tracks covering hottest Technology Trends in Darija",
    description:
      "By the Moroccan developer community, for the Moroccan developer community, BlaBla Conf is your one stop shop for latest and hottest technology trends, in Darija, and completely free! Join us from 19th to 24th October",
    type: "website",
    locale: "en_IE",
    url: `${host}/`,
    site_name: "BlaBlaConf",
    images: [
      {
        url: `${host}/cover.jpeg`,
      },
    ],
  },
  twitter: {
    handle: "@geeksblabla",
    site: "@geeksblabla",
    cardType: "summary_large_image",
  },
};
