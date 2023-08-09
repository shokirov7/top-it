import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRTlmafpdRHnsh9i6J2BaW0wQ0hDk3Qbk",
  authDomain: "registration-86ff0.firebaseapp.com",
  projectId: "registration-86ff0",
  storageBucket: "registration-86ff0.appspot.com",
  messagingSenderId: "821805323963",
  appId: "1:821805323963:web:6214096491ae35ecdbbb9e",
  measurementId: "G-NRF1KYVSL0",
};

firebase.initializeApp(firebaseConfig)

const projAuth = firebase.auth()

export {projAuth}