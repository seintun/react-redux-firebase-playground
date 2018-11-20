import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDgX9RH-V6JBxobar7_o0KX54wSHQKhLWw",
  authDomain: "sein-ninja-marioplan.firebaseapp.com",
  databaseURL: "https://sein-ninja-marioplan.firebaseio.com",
  projectId: "sein-ninja-marioplan",
  storageBucket: "sein-ninja-marioplan.appspot.com",
  messagingSenderId: "624790006645"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;