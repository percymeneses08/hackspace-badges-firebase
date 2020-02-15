import firebase from 'firebase'
import 'firebase/firebase-firestore'

firebase.initializeApp ({
  apiKey: "AIzaSyCgaTTSTMrP4eESDcOklS71ZStF8VN_Ek4",
  authDomain: "hackspace-badges.firebaseapp.com",
  projectId: "hackspace-badges"
})

let db = firebase.firestore()
// db.settings({ timestampsInSnapshots: true })

export default db