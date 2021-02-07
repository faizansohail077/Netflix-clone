import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDRHU96piS4ldmK7LOpf-ttHoozDFkPDX0",
    authDomain: "netflix-clone-22136.firebaseapp.com",
    projectId: "netflix-clone-22136",
    storageBucket: "netflix-clone-22136.appspot.com",
    messagingSenderId: "975546116386",
    appId: "1:975546116386:web:9303d0307d35789c979d7b",
    measurementId: "G-2BXWTBQSKD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db