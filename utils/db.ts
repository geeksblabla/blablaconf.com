import * as admin from "firebase-admin";

const STATS_DOC = "----stats----";

const getFirebase = () => {
  const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // https://stackoverflow.com/a/41044630/1332513
        privateKey: firebasePrivateKey?.replace(/\\n/g, "\n"),
      }),
    });
  }
  return admin;
};

const Tickets = () => getFirebase().firestore().collection("tickets");
const Registration = () =>
  getFirebase().firestore().collection("registrations");

export const getTicketsInfo = (userName: string) => {
  return Tickets().doc(userName).get();
};

export const addEmail = (email: string) => {
  return Registration().doc(email).set(
    {
      email,
      createdAt: getFirebase().firestore.FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
};

export type User = {
  name: string;
  login: string; // username
  avatar: string;
  email: string;
  ticketNumber?: number;
  bio: string;
};

export const isUserExist = async (username: string) => {
  const userDoc = await Tickets().doc(username).get();

  return userDoc.exists;
};

export const saveUser = async (user: User) => {
  const exists = await isUserExist(user.login);

  if (exists) return Promise.resolve(true);
  const ticketNumber = await getTicketNumber();

  const saveUserRequest = Tickets()
    .doc(user.login)
    .set(
      {
        ...user,
        createdAt: getFirebase().firestore.FieldValue.serverTimestamp(),
        ticketNumber,
      },
      { merge: true }
    );

  const incrementTicketNumber = Tickets()
    .doc(STATS_DOC)
    .set(
      {
        total: getFirebase().firestore.FieldValue.increment(1),
      },
      { merge: true }
    );

  return Promise.all([saveUserRequest, incrementTicketNumber]);
};

const getTicketNumber = async () => {
  const StatsDoc = Tickets().doc(STATS_DOC);

  try {
    const stats = await StatsDoc.get();
    if (stats.exists) {
      const total = stats.data();
      return total?.total + 1;
    } else {
      await StatsDoc.set({ total: 0 });
      return 1;
    }
  } catch (error) {
    throw new Error("error getting ticket number ");
  }
};
