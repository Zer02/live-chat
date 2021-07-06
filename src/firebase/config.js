import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDiTV6kcCrV_hxXvCOtR8R0QrUTDwhzGzY",
  authDomain: "udemy-ninja-chat-3a662.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-3a662.firebaseio.com",
  projectId: "udemy-ninja-chat-3a662",
  storageBucket: "udemy-ninja-chat-3a662.appspot.com",
  messagingSenderId: "587447912996",
  appId: "1:587447912996:web:e12e9a2b644e23e4cb26b1"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }