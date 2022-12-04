import { Session } from "@/utils/sessionize";

export const SessionTime = ({ session }: { session: Session }) => {
  return (
    <time className="block mb-2 text-sm font-normal leading-none text-gray-500 ">
      {getSessionTime(session)}
    </time>
  );
};

const getSessionTime = (session: Session) => {
  const start = new Date(session.startsAt);
  const end = new Date(session.endsAt);
  return `${start.getHours()}:${getMinutes(
    start
  )} - ${end.getHours()}:${getMinutes(end)}`;
};

const getMinutes = (date: Date) => {
  return date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
};
