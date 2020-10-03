const host = process.env.NEXT_PUBLIC_HOST;
export default {
  title:
    "BlaBla Conf | 5 Days and 5 Tracks Covering Hottest Technology Trends in Darija",
  description:
    "By the Moroccan developer community, for the Moroccan developer community, BlaBla Conf is your one stop shop for latest and hottest technology trends, in Darija, and completely free! Join us from 20th to 24th October",
  canonical: `https://${host}/`,
  openGraph: {
    title:
      "BlaBla Conf | 5 Days and 5 Tracks covering hottest Technology Trends in Darija",
    description:
      "By the Moroccan developer community, for the Moroccan developer community, BlaBla Conf is your one stop shop for latest and hottest technology trends, in Darija, and completely free! Join us from 20th to 24th October",
    type: "website",
    locale: "en_IE",
    url: `https://${host}/`,
    site_name: "BlaBlaConf",
    images: [
      {
        url: `https://${host}/cover.jpg`,
      },
    ],
  },
  twitter: {
    handle: "@geeksblabla",
    site: "@geeksblabla",
    cardType: "summary_large_image",
  },
};
