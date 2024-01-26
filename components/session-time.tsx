import { Session } from "@/utils/sessionize";
import { AddToCalendar } from "./agenda/add-to-calendar";

export const SessionTime = ({
  session,
  showDay = false,
}: {
  session: Session;
  showDay?: boolean;
}) => {
  return (
    <time className="block mb-1 text-sm font-normal leading-none  ">
      {getSessionTime(session, showDay)}
    </time>
  );
};

const getSessionTime = (session: Session, showDay: boolean) => {
  const start = new Date(session.startsAt);
  const end = new Date(session.endsAt);
  const day = showDay ? `- ${start.getDate()}  February` : "";
  return `${start.getHours()}:${getMinutes(
    start
  )} - ${end.getHours()}:${getMinutes(end)}  ${day} `;
};

const getMinutes = (date: Date) => {
  return date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
};
