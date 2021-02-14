import firebase from "firebase"

const firebase = firebase.initializeApp({
    
        apiKey: "AIzaSyDFSRAMz37PRjCgcOtI5BHHr5axkQk1dvI",
        authDomain: "clone-7996d.firebaseapp.com",
        projectId: "clone-7996d",
        storageBucket: "clone-7996d.appspot.com",
        messagingSenderId: "513553388841",
        appId: "1:513553388841:web:bf2aa9c7c84f33c1f19338",
        measurementId: "G-QV2L5W4PY1"
      
})
const db = firebase.firestore();
const auth = firebase.auth();


export{db,auth}