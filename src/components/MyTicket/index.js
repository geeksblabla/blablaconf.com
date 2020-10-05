import { Header } from "components/Header";
import { Container } from "components/Container";
import { getTicketImg } from "components/utils";
import { RegistrationForm } from "components/RegistrationForm/index";
import styles from "./index.module.css";

export const MyTicket = ({ user }) => {
	return (
		<div className={styles.hero}>
			<Container>
				<Header />
				<div className={styles.main}>
					<h1 className={styles.title}> {user.name} 's Ticket</h1>
					<div className={styles.img_container}>
						<img src={getTicketImg(user)} className={styles.img} />
					</div>
					<div className={styles.date}>Join them on October 20-24 | Online</div>
					<RegistrationForm />
				</div>
			</Container>
		</div>
	);
};
