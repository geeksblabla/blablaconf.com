import { useState } from "react";
import { Container } from "../Container";
import styles from "./index.module.css";
import { AddToCalendar } from "./AddToCalendar";

export const Agenda = ({ tracks }) => {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const track = tracks[selectedTrack];
  return (
    <div className={styles.agenda} id="agenda">
      <Container>
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
      </Container>
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

const Talk = ({ title, startTime, endTime, speaker }) => (
  <div className={styles.talk}>
    <AddToCalendar event={getEvent({ title, startTime, endTime })} />

    <div className={styles.talk_container}>
      <p className={styles.talk_title}> {title} </p>

      {startTime !== "time: N/A" && (
        <div className={styles.time}>
          <p className={styles.talk_time}>
            {" "}
            {`${getTimeFormat(startTime)} - ${getTimeFormat(
              endTime
            )} GMT+1 `}{" "}
          </p>
        </div>
      )}

      <div className={styles.talk_speaker}>
        <img
          className={styles.talk_speaker_avatar}
          alt={`picture of ${speaker.name}`}
          src={speaker.avatar}
        />
        <div>
          <p className={styles.talk_speaker_name}> {speaker.name}</p>
          <p className={styles.talk_speaker_role}> {speaker.role}</p>
        </div>
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

const getTimeFormat = (d) => {
  const date = new Date(d);
  return `${date.getHours()}:${
    date.getMinutes() < 10 ? `0` : ""
  }${date.getMinutes()}`;
};

const getEvent = ({ title, startTime, endTime }) => {
  const event = {
    title: `BlaBla Conf : ${title}`,
    description: `Live will be on : Facebook Page : https://facebook.com/geeksblabla
    And Youtube Channel : https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA`,
    location: "https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA",
    startTime: startTime,
    endTime: endTime,
  };
  return event;
};
