import { firestore } from "../../config/firebase";
import { NextSeo } from "next-seo";
import { Layout, MyTicket } from "../../components";
import { getTicketGraphImg } from "../../components/utils";

const TicketPage = ({ user, seoConfig }) => {
  return (
    <Layout>
      <NextSeo {...seoConfig} />
      <MyTicket user={user} />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const username = query.username;

  let seoConfig = null;
  let user = null;

  if (username && username !== "")
    await firestore
      .collection("/tickets")
      .doc(username)
      .get()
      .then(function (doc) {
        user = doc.data();
        seoConfig = {
          title: user.name + "'s Ticket",
          description: user.name + "'s BlaBlaConf Ticket",
          openGraph: {
            type: "website",
            locale: "en_IE",
            url:
              "https://" +
              process.env.NEXT_PUBLIC_HOST +
              "/myticket/" +
              user.username,
            title: user.name + "'s Ticket",
            description: user.name + "'s BlaBlaConf Ticket",
            images: [
              {
                url: getTicketGraphImg(user),
              },
            ],
            site_name: "blablaconf.com",
            imageWidth: 1200,
            imageHeight: 1200,
          },
        };
      });

  return {
    props: {
      user,
      seoConfig,
    },
  };
}

export default TicketPage;
