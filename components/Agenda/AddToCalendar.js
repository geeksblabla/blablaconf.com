import helpersClass from "react-add-to-calendar/lib/helpers";
const helpers = new helpersClass();
import styles from "./index.module.css";

/*
TODO: remove react-add-to-calendar and create a function to generate event link
https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/master/services/google.md

*/

export const AddToCalendar = ({ event, outline = false, recur = false }) => {
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
    >
      Add To Calendar
    </a>
  );
};
