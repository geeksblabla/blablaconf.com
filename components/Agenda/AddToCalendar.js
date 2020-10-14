import helpersClass from "react-add-to-calendar/lib/helpers";
const helpers = new helpersClass();
import styles from "./index.module.css";

export const AddToCalendar = ({ event }) => {
  return (
    <div className={styles.add_to_calendar}>
      <a
        className={styles.add_to_calendar_link}
        href={helpers.buildUrl(event, "google", false)}
        target="_blank"
      >
        Add To Calendar
      </a>
    </div>
  );
};
