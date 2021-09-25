import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';  


firebase.initializeApp( {
  apiKey: "AIzaSyClC9tcS485aUfaHfEERvC8Z4h-RqDjYvE",
  authDomain: "flatbuddy-3379b.firebaseapp.com",
  projectId: "flatbuddy-3379b",
  storageBucket: "flatbuddy-3379b.appspot.com",
  messagingSenderId: "237930991888",
  appId: "1:237930991888:web:b780a60ee297d678a8d595"
  });

  const auth = firebase.auth();
  const storage = firebase.storage();

  export {auth,storage};