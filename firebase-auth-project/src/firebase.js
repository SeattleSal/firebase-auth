import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

// Initialize Firebase or if already connected, use existing connection
let Firebase;
if(!firebase.apps.length) {
    Firebase = firebase.initializeApp(firebaseConfig);
    console.log('connecting to firebase...')
} else {
    Firebase = firebase.app();
    console.log('already connected to firebase...')
}

export default Firebase;