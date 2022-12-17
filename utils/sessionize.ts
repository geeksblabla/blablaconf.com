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

export type Session = {
  id: string;
  title: string;
  description: string;
  speakers: Speaker[];
  startsAt: string;
  endsAt: string;
};

export type SessionByDay = {
  day: string;
  groupName: string;
  sessions: Session[];
};

export const getSpeakers: () => Promise<Speaker[]> = async () => {
  const res = await fetch(
    "https://sessionize.com/api/v2/bnh6bsfu/view/Speakers"
  );
  const data = await res.json();
  return data;
};

export const getSessions = async () => {
  const sessionsRes = await fetch(
    "https://sessionize.com/api/v2/0m5k0g9w/view/Sessions"
    // "https://sessionize.com/api/v2/bnh6bsfu/view/Sessions"
  );
  const speakersRes = await fetch(
    "https://sessionize.com/api/v2/0m5k0g9w/view/Speakers"
    // "https://sessionize.com/api/v2/bnh6bsfu/view/Speakers"
  );
  const sessions: SessionByDay[] = await sessionsRes.json();
  const speakers: Speaker[] = await speakersRes.json();
  return normalizeSessionsByDay(sessions, speakers);
};

const normalizeSessionsByDay = (
  sessions: SessionByDay[],
  speakers: Speaker[]
) => {
  return sessions.map((sessionByDay) => {
    const sessions = normalizeSessions(sessionByDay.sessions, speakers);
    return {
      ...sessionByDay,
      day: sessions[0].startsAt,
      sessions,
    };
  });
};

const normalizeSessions = (sessions: Session[], speakers: Speaker[]) => {
  return sessions.map((session) => {
    const _speakers = session.speakers
      .map((speaker) => getSpeakerInfo(speaker.id, speakers))
      .filter((session) => session !== undefined) as Speaker[];
    return {
      ...session,
      speakers: _speakers,
    };
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
