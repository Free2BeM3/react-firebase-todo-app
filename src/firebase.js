import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAKAx6jxiBUflPBWqpMGcDsKujkh-jU83M",
//     authDomain: "react-firebase-todo-app-94aea.firebaseapp.com",
//     projectId: "react-firebase-todo-app-94aea",
//     storageBucket: "react-firebase-todo-app-94aea.appspot.com",
//     messagingSenderId: "816632136799",
//     appId: "1:816632136799:web:0882b8c6688364affa47ea",
//     measurementId: "G-9B6WWZZCVH"
//   };

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAKAx6jxiBUflPBWqpMGcDsKujkh-jU83M",
  authDomain: "react-firebase-todo-app-94aea.firebaseapp.com",
  projectId: "react-firebase-todo-app-94aea",
  storageBucket: "react-firebase-todo-app-94aea.appspot.com",
  messagingSenderId: "816632136799",
  appId: "1:816632136799:web:0882b8c6688364affa47ea",
  measurementId: "G-9B6WWZZCVH",
});

const db = firebaseApp.firestore();

export default db;
