// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTEN9oiOt-0WuD1j8IMDTmg7cgWaRsRXI",
    authDomain: "snapchat-clone-53f6b.firebaseapp.com",
    projectId: "snapchat-clone-53f6b",
    storageBucket: "snapchat-clone-53f6b.appspot.com",
    messagingSenderId: "896626448136",
    appId: "1:896626448136:web:a51ee35170e4140e833ebd",
    measurementId: "G-EP38W2S977"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db ,auth, storage, provider};

  