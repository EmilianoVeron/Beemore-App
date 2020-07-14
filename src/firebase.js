import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDxTGWfsh78Ji_bZYLbLlH9EIaqjW_Sw14",
  authDomain: "appiarconsultoresagroapicolas.firebaseapp.com",
  databaseURL: "https://appiarconsultoresagroapicolas.firebaseio.com",
  projectId: "appiarconsultoresagroapicolas",
  storageBucket: "appiarconsultoresagroapicolas.appspot.com",
  messagingSenderId: "351062881163",
  appId: "1:351062881163:web:535cd86166c04021e1358e",
  measurementId: "G-TGKR2ZD5P3",
});

export default app;
