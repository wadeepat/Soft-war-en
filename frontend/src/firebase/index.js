import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbZkvyvj1pm6ygYQjRil9usTR61GhNXiU",
    authDomain: "soft-war-en.firebaseapp.com",
    projectId: "soft-war-en",
    storageBucket: "soft-war-en.appspot.com",
    messagingSenderId: "202141520404",
    appId: "1:202141520404:web:5afe4e7f91a901fcda8d01",
    measurementId: "G-BZYGX0EBDD"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export{storage, firebase as default}