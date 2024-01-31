import { NextSeo, NextSeoProps } from "next-seo";

import { getUserInfo } from "@/utils/ticket-service";
import { NEXT_SEO_DEFAULT } from "next-seo.config";
import { TicketHero } from "@/components/ticket-hero";
import { Layout } from "@/components/layout";
import { GetStaticPaths } from "next";

const TicketPage = ({
  user,
  seo,
}: {
  seo: NextSeoProps;
  user?: { name: string; image: string; url: string };
}) => {
  if (!user) {
    return (
      <Layout>
        <div> no ticket</div>
      </Layout>
    );
  }
  return (
    <Layout>
      <NextSeo {...seo} />
      <TicketHero {...user} />;
    </Layout>
  );
};

export const getStaticProps = async ({
  params,
}: {
  params: { username: string };
}) => {
  const { user, seoConfig } = await getUserInfo(params.username);
  const seo = { ...NEXT_SEO_DEFAULT, ...seoConfig };

  return {
    props: {
      user,
      seo,
    },
    revalidate: 36000,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return Promise.resolve({
    paths: [],
    fallback: "blocking",
  });
};

export default TicketPage;
