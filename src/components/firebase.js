import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgYK-MwEy5JnV24rM7FJhCBFPaN2H2ILw",
  authDomain: "whatsapp-clone-c7a8c.firebaseapp.com",
  projectId: "whatsapp-clone-c7a8c",
  storageBucket: "whatsapp-clone-c7a8c.appspot.com",
  messagingSenderId: "940612838544",
  appId: "1:940612838544:web:9ec554382b970e37216415",
  measurementId: "G-M52ERQFEMR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
