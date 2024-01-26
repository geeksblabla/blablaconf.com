import { Session } from "@/utils/sessionize";
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
  const start = new Date(session.startDate);
  const day = showDay ? `- ${start.getDate()}  February` : "";
  return `${session.startTime} - ${session.endTime}  ${day} `;
};
