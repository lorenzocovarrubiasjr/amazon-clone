import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdqWpUpRdDDOo6ItIZh4R_ZP86oZQuAbA",
  authDomain: "clone-2475f.firebaseapp.com",
  databaseURL: "https://clone-2475f.firebaseio.com",
  projectId: "clone-2475f",
  storageBucket: "clone-2475f.appspot.com",
  messagingSenderId: "737810668018",
  appId: "1:737810668018:web:9f89dbd5a55bad8b3cb36b",
  measurementId: "G-ZQQF75X9ZL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
