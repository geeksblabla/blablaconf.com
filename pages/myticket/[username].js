import { NextSeo } from "next-seo";
import { firestore } from "../../config/firebase";
import { Layout, MyTicket } from "../../components";
import { getTicketGraphImg } from "../../components/utils";

const TicketPage = ({ user, seoConfig }) => (
	<Layout>
		<NextSeo {...seoConfig} />
		<MyTicket user={user} />
	</Layout>
);

export const getStaticPaths = async () => ({
	paths: [
		{
			params: {
				username: "smakosh",
			},
		},
	],
	fallback: true,
});

export const getStaticProps = async ({ params: { username } }) => {
	let seoConfig = null;
	let user = null;

	const doc = await firestore.collection("/tickets").doc(username).get();

	user = doc.data();
	const name = user.name === null ? user.username : user.name;

	seoConfig = {
		title: name + "'s BlaBlaConf Ticket",
		description:
			"BlaBla Conf | 5 Days and 5 Tracks Covering Hottest Technology Trends in Darija",
		openGraph: {
			type: "website",
			locale: "en_IE",
			url: `https://${process.env.NEXT_PUBLIC_HOST}/myticket/${user.username}`,
			title: `${name}'s BlaBlaConf Ticket`,
			description:
				"BlaBla Conf | 5 Days and 5 Tracks Covering Hottest Technology Trends in Darija",
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

	return {
		props: {
			user,
			seoConfig,
		},
		revalidate: 2,
	};
};

export default TicketPage;
