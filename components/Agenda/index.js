import { useState } from "react";
import { Container } from "../Container";
import styles from "./index.module.css";
import { AddToCalendar } from "./AddToCalendar";

export const Agenda = ({ tracks }) => {
  const [selectedTrack, setSelectedTrack] = useState(2);
  const track = tracks[selectedTrack];
  const startTime = "2020-10-20T16:30:00+01:00";
  const endTime = "2020-10-20T22:00:00+01:00";
  const event = {
    title: `BlaBla Conf Days`,
    description: `Facebook Page: https://facebook.com/geeksblabla
    Youtube Channel: https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA
    Website: https://blablaconf.com/`,
    location: "https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA",
    startTime: startTime,
    endTime: endTime,
  };
  return (
    <div className={styles.agenda} id="agenda">
      <Container>
        <div className={styles.agenda_header}>
          <div className={styles.agenda_title}>
            <h1 className={styles.title}> Agenda 📅</h1>
            <p className={styles.description}> See what's happening & when.</p>
          </div>
          <div>
            <AddToCalendar event={event} outline recur />
          </div>
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

const Talks = ({ sessions }) => {
  return (
    <div className={styles.talks}>
      {sessions.map((talk, i) => (
        <Talk {...talk} key={`talk-${i}`} />
      ))}
    </div>
  );
};

const Talk = ({ title, startTime, endTime, speaker }) => (
  <div className={styles.talk}>
    <div className={styles.add_to_calendar}>
      <AddToCalendar event={getEvent({ title, startTime, endTime })} />
    </div>

    <div className={styles.talk_container}>
      <p className={styles.talk_title}> {title} </p>

      {startTime !== "time: N/A" && (
        <div className={styles.time}>
          <p className={styles.talk_time}>
            {" "}
            {`${getTimeFormat(startTime)} - ${getTimeFormat(
              endTime
            )} ${getCurrentTimeZone()} `}{" "}
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

const getCurrentTimeZone = () => {
  const offset = new Date().getTimezoneOffset()/-60;
  return `GMT${offset>0?'+':''}${offset}`
}

const getEvent = ({ title, startTime, endTime }) => {
  const event = {
    title: `BlaBla Conf : ${title}`,
    description: `Facebook Page: https://facebook.com/geeksblabla
Youtube Channel: https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA
Website: https://blablaconf.com/`,
    location: "https://www.youtube.com/channel/UCW2WV7NKU0WPyuv4YoNSqBA",
    startTime: startTime,
    endTime: endTime,
  };
  return event;
};

{
  /* /* https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20201020T154500Z/20201020T161500Z&location=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCW2WV7NKU0WPyuv4YoNSqBA&text=BlaBla%20Conf%20%3A%20What%20the%20hell%20is%20static%20site%20regeneration%3F&details=Live%20will%20be%20on%20%3A%20Facebook%20Page%20%3A%20https%3A%2F%2Ffacebook.com%2Fgeeksblabla%0A%20%20%20%20And%20Youtube%20Channel%20%3A%20https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCW2WV7NKU0WPyuv4YoNSqBA&recur=RRULE:FREQ=DAILY;COUNT=10 */
}
