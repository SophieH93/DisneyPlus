import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfEyL-iHQXOcoDvnR9jktJ_tR_792ajVo",
  authDomain: "disney-plus-clone-fa812.firebaseapp.com",
  projectId: "disney-plus-clone-fa812",
  storageBucket: "disney-plus-clone-fa812.appspot.com",
  messagingSenderId: "142371885642",
  appId: "1:142371885642:web:e005b85d9f7428965b0cb3",
  measurementId: "G-JX0FMVPJMT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
