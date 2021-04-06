import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC2T26sJWdpMj5Zw0wk0u5d_nJs2VMA7CU",
  authDomain: "bedtimestories-f320e.firebaseapp.com",
  projectId: "bedtimestories-f320e",
  storageBucket: "bedtimestories-f320e.appspot.com",
  messagingSenderId: "525671349799",
  appId: "1:525671349799:web:a8471b0073e90553755802"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
