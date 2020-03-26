import firebase from "firebase"
const config = {
  apiKey: "AIzaSyBvUa8hWuA_lls__Y2UQjUHZKb4AA9rfoI",
  authDomain: "open-poortje.firebaseapp.com",
  databaseURL: "https://open-poortje.firebaseio.com",
  projectId: "open-poortje",
  storageBucket: "open-poortje.appspot.com",
  messagingSenderId: "544022735205",
  appId: "1:544022735205:web:27230f485851fb018c998c",
  measurementId: "G-Q9DQ1J9JXR"
}
firebase.initializeApp(config)
export default firebase
