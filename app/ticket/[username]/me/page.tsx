import { TicketHero } from "@/components/ticket-hero";
import { getUserInfo } from "@/utils/ticket-service";
import type { Metadata } from "next";

type Props = {
  params: { username: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { metadata } = await getUserInfo(params.username);

  // optionally access and extend (rather than replace) parent metadata
  if (metadata) {
    return metadata;
  }

  return {};
}

export default async function Page({ params }: Props) {
  const { user } = await getUserInfo(params.username);
  return <TicketHero {...user} />;
}
