import { NextSeoProps } from "next-seo";
import { getTicketsInfo, User } from "./db";

export const generateTicketsSeoConfig = (user: User): NextSeoProps => {
  const name = user.name === null ? user.login : user.name;
  const seoConfig = {
    title: name + "'s BlaBlaConf Ticket",
    description:
      "BlaBla Conf | 5 Days and 5 Tracks Covering Hottest Technology Trends in Darija",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: process.env.NEXT_PUBLIC_HOST + "/user/" + user.login,
      title: name + "'s BlaBlaConf Ticket",
      description:
        "BlaBla Conf | 5 Days and 5 Tracks Covering Hottest Technology Trends in Darija",
      images: [
        {
          url: getTicketImg(user),
        },
      ],
      site_name: "blablaconf.com",
      imageWidth: 1200,
      imageHeight: 630,
    },
  };

  return seoConfig;
};

const getTicketImg = (user: User) => {
  const name = user.name === null ? user.login : user.name;
  const ticketImg = `https://res.cloudinary.com/blablaconf/image/upload/v1627977252/tickets/${name}.png`;
  return ticketImg;
};

export const getUserInfo = async (username: string) => {
  let seoConfig = null;
  let user = null;

  if (username && username !== "") {
    const userDoc = await getTicketsInfo(username);
    if (userDoc.exists) {
      // TODO: only pass required data
      const u = userDoc.data() as User;
      seoConfig = generateTicketsSeoConfig(u);
      user = {
        name: u.name === null ? u.login : u.name,
        image: getTicketImg(u),
        url: process.env.NEXT_PUBLIC_HOST + "/user/" + u.login,
      };
    }
  }
  return { seoConfig, user };
};
