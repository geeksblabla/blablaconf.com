import yaml from "js-yaml";

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

export async function getData() {
  const context = require.context("../../tracks/", false, /\.yml$/);
  const tracks = [];
  const speakers = [];
  for (const key of context.keys()) {
    const trackName = key.slice(2);
    const content = await import(`../../tracks/${trackName}`);
    const track = yaml.safeLoad(content.default);
    tracks.push(track);
    const trackSpeakers = track.sessions.map((s) => s.speaker).sort(compare);

    speakers.push(...trackSpeakers);
  }

  return { tracks, speakers };
}
