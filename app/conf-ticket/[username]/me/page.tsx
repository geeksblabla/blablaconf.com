import { TicketHero } from "@/components/ticket-hero";
import { getUserInfo } from "@/utils/ticket-service";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  // read route params
  const { metadata } = await getUserInfo(params.username);

  // optionally access and extend (rather than replace) parent metadata
  if (metadata) {
    return metadata;
  }

  return {};
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { user } = await getUserInfo(params.username);
  return <TicketHero {...user} />;
}
