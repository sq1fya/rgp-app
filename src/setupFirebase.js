import firebase from 'firebase/app'
// import 'firebase/<PACKAGE>';
import 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyClWtxnkeT6Uk9IMGOnOCnjY_DSnT_z0aI",
    authDomain: "retrogameparty-fb.firebaseapp.com",
    databaseURL: "https://retrogameparty-fb.firebaseio.com",
    projectId: "retrogameparty-fb",
    storageBucket: "retrogameparty-fb.appspot.com",
    messagingSenderId: "880670259471"
};
firebase.initializeApp(config)
