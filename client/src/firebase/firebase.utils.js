import firebase from 'firebase/app'; // you always need to import this firebase keyword to use the utility library
import 'firebase/firestore';
import 'firebase/auth';

// config settings for xylo from firebase
const config = {
    apiKey: "AIzaSyAauEbWF0_rqoTMzq67OoL837csPUlXHNU",
    authDomain: "xylo-b2664.firebaseapp.com",
    databaseURL: "https://xylo-b2664.firebaseio.com",
    projectId: "xylo-b2664",
    storageBucket: "xylo-b2664.appspot.com",
    messagingSenderId: "823628581971",
    appId: "1:823628581971:web:942f91eab93cb216290aa6",
    measurementId: "G-LMHDCT4XSH"
}

// pass specific config values into this firebase init method
  firebase.initializeApp(config);

  export const firestore = firebase.firestore();
  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  // setting this parameter lets us trigger the google popup to select google account, for auth when the google sign in is triggered
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  // in case we want access to the whole library at some point, export firebase
  export default firebase;