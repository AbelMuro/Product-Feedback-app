import { initializeApp } from "firebase/app";               //you need this for your app to use firebase
import { getAuth} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  };

  // Initialize Firebase
export const App = initializeApp(firebaseConfig);

// Initialize authentication and exporting it
export const Auth = getAuth(App);                                           //alot of the times, to use firebase, you will need to export these objects

// Initialize firestore database and exporting it
export const DB = getFirestore(App);

