export type SpeakerLink = {
  title: string;
  url: string;
  linkType: "Twitter" | "LinkedIn";
};

export type Speaker = {
  fullName: string;
  profilePicture: string;
  links: SpeakerLink[];
  tagLine: string;
};

export const getSpeakers: () => Promise<Speaker[]> = async () => {
  const res = await fetch(
    "https://sessionize.com/api/v2/7nekgixi/view/Speakers"
  );
  const data = await res.json();
  return data;
};
