import yaml from "js-yaml";

const compare = (a, b) => {
	// Use toUpperCase() to ignore character casing
	const bandA = a.name.toUpperCase();
	const bandB = b.name.toUpperCase();

	let comparison = 0;
	if (bandA > bandB) {
		comparison = 1;
	} else if (bandA < bandB) {
		comparison = -1;
	}
	return comparison;
};

const getData = async () => {
	const context = require.context("data/tracks/", false, /\.yml$/);
	const tracks = [];
	let speakers = [];

	for (const key of context.keys()) {
		const trackName = key.slice(2);
		const content = await import(`data/tracks/${trackName}`);

		const track = yaml.safeLoad(content.default);
		tracks.push(track);

		const trackSpeakers = track.sessions
			.map((s) => s.speaker)
			.filter((sp) => !speakers.some((s) => s.name === sp.name));
		speakers.push(...trackSpeakers);
	}

	return { tracks, speakers: speakers.sort(compare) };
};

export default getData;
