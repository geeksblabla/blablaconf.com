import { getTicketsInfo, User } from "./db";
import { Metadata } from "next";

export const generateTicketsMetadata = (user: User): Metadata => {
  const name = user.name === null ? user.login : user.name;
  const metadata: Metadata = {
    title: name + "'s BlaBlaConf Ticket - تكنوفنا",
    description:
      "By the Moroccan developer community, for the Moroccan developer community, BlaBla Conf is your one stop shop for latest and hottest technology trends, in Darija, and completely free! Join us from 19th to 24th December",
    twitter: {
      title: name + "'s BlaBlaConf Ticket - تكنوفنا",
      images: [
        {
          url: getTicketImg(user),
          width: 1200,
          height: 630,
        },
      ],
    },
    openGraph: {
      locale: "en_IE",
      url: process.env.NEXT_PUBLIC_HOST + "/conf-ticket/" + user.login,
      title: name + "'s BlaBlaConf Ticket - تكنوفنا",
      description:
        "By the Moroccan developer community, for the Moroccan developer community, BlaBla Conf is your one stop shop for latest and hottest technology trends, in Darija, and completely free! Join us from 19th to 24th December",

      images: [
        {
          url: getTicketImg(user),
          width: 1200,
          height: 630,
        },
      ],
    },
  };

  return metadata;
};

const getTicketImg = (user: User) => {
  const name = user.name === null ? user.login : user.name;
  const ticketImg = `${
    process.env.NEXT_PUBLIC_HOST
  }/conf-ticket/image?name=${encodeURIComponent(
    name
  )}&login=${encodeURIComponent(user.login)}&avatar=${encodeURIComponent(
    user.avatar
  )}&ticketNumber=${encodeURIComponent(user.ticketNumber)}`;
  return ticketImg;
};

export const getUserInfo = async (username: string) => {
  let metadata: Metadata | null = null;
  let user = null;

  if (username && username !== "") {
    const userDoc = await getTicketsInfo(username);
    if (userDoc.exists) {
      // TODO: only pass required data
      const u = userDoc.data() as User;
      metadata = generateTicketsMetadata(u);
      user = {
        name: u.name === null ? u.login : u.name,
        image: getTicketImg(u),
        url: process.env.NEXT_PUBLIC_HOST + "/ticket/" + u.login,
      };
    }
  }
  return { metadata, user };
};
