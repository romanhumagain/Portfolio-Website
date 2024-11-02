import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG2XE4AM5Ld7rAcTfeiLlc2oxRp1ORsyw",
  authDomain: "portfolio--chat.firebaseapp.com",
  projectId: "portfolio--chat",
  storageBucket: "portfolio--chat.firebasestorage.app",
  messagingSenderId: "411858060277",
  appId: "1:411858060277:web:21ffd0d7297d39522856bc",
  measurementId: "G-GSQ070NT66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to local (user stays logged in)");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

const db = getFirestore(app);

export { auth, db };
export default app;
