import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCebuaOFBAO6q7uXzyIN5FxdDrvcc_6mBU",
    authDomain: "projectx1-9089c.firebaseapp.com",
    databaseURL: "https://projectx1-9089c.firebaseapp.com"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();