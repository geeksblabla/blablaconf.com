import helpersClass from "react-add-to-calendar/lib/helpers";
const helpers = new helpersClass();
import styles from "./index.module.css";
import { event as GEvent } from "../gtag";

/*
TODO: remove react-add-to-calendar and create a function to generate event link
https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/master/services/google.md

*/

export const AddToCalendar = ({ event, outline = false, recur = false }) => {
  const onLinkClick = () => {
    GEvent({
      action: "add_to_calendar",
      category: "tracks",
      label: event.title,
      value: 1,
    });
  };
  return (
    <a
      className={
        outline
          ? `${styles.add_to_calendar_link} ${styles.add_to_calendar_link_outline}`
          : `${styles.add_to_calendar_link}`
      }
      href={`${helpers.buildUrl(event, "google", false)} ${
        recur ? "&recur=RRULE:FREQ=DAILY;COUNT=5" : ""
      }`}
      target="_blank"
      onClick={onLinkClick}
    >
      Add To Calendar
    </a>
  );
};

export const WatchOnYoutube = ({ youtubeLink, outline = false }) => {
  return (
    <a
      className={
        outline
          ? `${styles.add_to_calendar_link} ${styles.add_to_calendar_link_outline}`
          : `${styles.add_to_calendar_link}`
      }
      href={youtubeLink}
      target="__blank"
      rel="noopener"
    >
      Watch on Youtube
    </a>
  );
};
