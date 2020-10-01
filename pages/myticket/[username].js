import { firestore } from "../../config/firebase";
import { NextSeo } from "next-seo";
import { Layout, MyTicket } from "../../components";

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
          description: user + "'s Ticket",
          openGraph: {
            type: "website",
            locale: "en_IE",
            url:
              "https://" +
              process.env.NEXT_PUBLIC_HOST +
              "/myticket/" +
              user.username,
            title: user.name + "'s Ticket",
            description: "BlaBlaConf Ticket",
            images: [
              {
                url:
                  "https://res.cloudinary.com/dvapezchz/image/upload/b_rgb:220c79/co_rgb:ffffff,l_text:montserrat_40:" +
                  user.name +
                  ",x_-30,y_-100/co_rgb:ffffff,l_text:montserrat_20:" +
                  user.username +
                  ",x_-90,y_-50/v1600707055/Group_1139_1_m81mmr.png",
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
