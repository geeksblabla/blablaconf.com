import { TicketHero } from "@/components/ticket-hero";
import { getUserInfo } from "@/utils/ticket-service";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const { user } = await getUserInfo(params.username);
  return <TicketHero {...user} />;
}
