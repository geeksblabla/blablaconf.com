import { getUserInfo } from "@/utils/ticket-service";
import { NextSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../../../next-seo.config"; // your path will vary

export default async function Head({
  params,
}: {
  params: { username: string };
}) {
  const { seoConfig } = await getUserInfo(params.username);
  const seo = { ...NEXT_SEO_DEFAULT, ...seoConfig };
  return (
    <>
      <NextSeo {...seo} useAppDir={true} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
}
