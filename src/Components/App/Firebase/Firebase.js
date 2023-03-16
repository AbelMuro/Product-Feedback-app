import { initializeApp } from "firebase/app";               //you need this for your app to use firebase
import { getAuth} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqSj4b_pgNdb5mLN3yUbI7JMsLWDH6kIA",
    authDomain: "front-end-mentor-suggestions.firebaseapp.com",
    projectId: "front-end-mentor-suggestions",
    storageBucket: "front-end-mentor-suggestions.appspot.com",
    messagingSenderId: "776251648486",
    appId: "1:776251648486:web:8d01ced286fd36d920ce27"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize authentication and exporting it
export const Auth = getAuth(app);                                           //alot of the times, to use firebase, you will need to export these objects

// Initialize firestore database and exporting it
export const DB = getFirestore(app);

