import { Session } from "@/utils/sessionize";
export const SessionTime = ({
  session,
  showDay = false,
}: {
  session: Session;
  showDay?: boolean;
}) => {
  return (
    <time className="block mb-1 text-sm font-bold leading-none text-[#53925E]  ">
      {getSessionTime(session, showDay)}
    </time>
  );
};

const getSessionTime = (session: Session, showDay: boolean) => {
  const start = new Date(session.startDate);
  const day = showDay ? `- ${start.getDate()}  February` : "";
  return `${session.startTime} - ${session.endTime}  ${day} `;
};
