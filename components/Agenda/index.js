import { useState } from "react";
import styles from "./index.module.css";

export const Agenda = ({ tracks }) => {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const track = tracks[selectedTrack];
  return (
    <div className={styles.agenda} id="agenda">
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}> Agenda 📅</h1>
          <p className={styles.description}> See what's happening & when.</p>
        </div>
        <div className={styles.main}>
          <Tracks
            tracks={tracks}
            setSelectedTrack={setSelectedTrack}
            selectedTrack={selectedTrack}
          />
          <Talks {...track} />
        </div>
      </div>
    </div>
  );
};

const Tracks = ({ tracks, setSelectedTrack, selectedTrack }) => {
  return (
    <ul className={styles.menu_container}>
      {tracks?.map((track, i) => (
        <Item
          key={`track-${i}`}
          track={track}
          onClick={() => setSelectedTrack(i)}
          active={selectedTrack === i}
        />
      ))}
    </ul>
  );
};

const Item = ({ onClick, active, track }) => {
  const style = active
    ? {
        background: "linear-gradient(0deg, #ffffff, #ffffff)",
        boxShadow: "20px 24px 40px rgba(0, 0, 0, 0.1)",
        borderRadius: "14px",
        color: "#5642BB",
      }
    : { color: "#ffffff" };

  return (
    <li onClick={onClick} className={styles.menu_item} style={style}>
      <div style={{ flex: 1 }}>
        <h3 className={styles.menu_item_date}>{track.date}</h3>
        <h5 className={styles.menu_item_title}> {track.title} </h5>
      </div>
      <Arrow className={styles.menu_item_arrow} />
    </li>
  );
};

const Talks = ({ sessions }) => (
  <div className={styles.talks}>
    {sessions.map((talk, i) => (
      <Talk {...talk} key={`talk-${i}`} />
    ))}
  </div>
);

const Talk = ({ title, time, speaker }) => (
  <div className={styles.talk}>
    <p className={styles.talk_title}> {title} </p>
    <p className={styles.talk_time}> {time} </p>
    <div className={styles.talk_speaker}>
      <img className={styles.talk_speaker_avatar} src={speaker.avatar} />
      <div>
        <p className={styles.talk_speaker_name}> {speaker.name}</p>
        <p className={styles.talk_speaker_role}> {speaker.role}</p>
      </div>
    </div>
  </div>
);

function Arrow(props) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        d="M4.5 15l7-7-7-7"
        stroke="#5642BB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
