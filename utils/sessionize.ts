import { format } from "date-fns";

export type SpeakerLink = {
  title: string;
  url: string;
  linkType: "Twitter" | "LinkedIn";
};

export type Speaker = {
  id: string;
  fullName: string;
  profilePicture: string;
  links: SpeakerLink[];
  tagLine: string;
  bio: string;
};

export type SessionizeSession = {
  id: string;
  title: string;
  description: string;
  speakers: Speaker[];
  startsAt: string;
  endsAt: string;
};

export type Session = {
  id: string;
  title: string;
  description: string;
  speakers: Speaker[];
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
};

export type SessionByDay<T> = {
  day: string;
  groupName: string;
  sessions: T[];
};

export const getSpeakers: () => Promise<Speaker[]> = async () => {
  const res = await fetch(
    "https://sessionize.com/api/v2/71tfc4rv/view/Speakers",
  );
  const data = await res.json();
  // shuffle speakers to avoid the same speaker being on top
  return data.sort(() => Math.random() - 0.5);
};

export const getSessions = async () => {
  const sessionsRes = await fetch(
    "https://sessionize.com/api/v2/71tfc4rv/view/Sessions",
    // "https://sessionize.com/api/v2/bnh6bsfu/view/Sessions"
  );
  const speakersRes = await fetch(
    "https://sessionize.com/api/v2/71tfc4rv/view/Speakers",
  );
  const sessions: SessionByDay<SessionizeSession>[] = await sessionsRes.json();
  const speakers: Speaker[] = await speakersRes.json();
  return normalizeSessionsByDay(sessions, speakers);
};

const normalizeSessionsByDay = (
  sessions: SessionByDay<SessionizeSession>[],
  speakers: Speaker[],
) => {
  return sessions.map((sessionByDay) => {
    const sessions = normalizeSessions(sessionByDay.sessions, speakers);
    return {
      ...sessionByDay,
      day: sessions[0].startDate,
      sessions,
    };
  });
};

const normalizeSessions = (
  sessions: SessionizeSession[],
  speakers: Speaker[],
) => {
  return sessions.map((session) => {
    const _speakers = session.speakers
      .map((speaker) => getSpeakerInfo(speaker.id, speakers))
      .filter((session) => session !== undefined) as Speaker[];

    const startDate = format(new Date(session.startsAt), "yyyy-MM-dd");
    const endDate = format(new Date(session.endsAt), "yyyy-MM-dd");
    const startTime = format(new Date(session.startsAt), "HH:mm");
    const endTime = format(new Date(session.endsAt), "HH:mm");
    const s: Session = {
      id: session.id,
      title: session.title,
      description: session.description,
      startDate,
      endDate,
      startTime,
      endTime,
      speakers: _speakers,
    };
    return s;
  });
};

const getSpeakerInfo = (id: string, speakers: Speaker[]) => {
  return speakers.find((speaker) => speaker.id === id);
};

export const getArrayOfSessions = async () => {
  const sessions = await getSessions();
  return sessions.reduce((acc, session) => {
    return [...acc, ...session.sessions];
  }, [] as Session[]);
};

export const getSession = async (id: string) => {
  const allSessions = await getArrayOfSessions();
  return allSessions.find((session) => session.id === id);
};