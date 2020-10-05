import styles from "./index.module.css";

export const Container = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};
