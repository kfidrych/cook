import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyAX_vCOcB0Hgvspc-puG__3aW3xm6gCzd0",
  authDomain: "chefapp-92b3c.firebaseapp.com",
  databaseURL: "https://chefapp-92b3c.firebaseio.com",
  projectId: "chefapp-92b3c",
  storageBucket: "chefapp-92b3c.appspot.com",
  messagingSenderId: "938311576581"
};

const devConfig = {
  apiKey: "AIzaSyAX_vCOcB0Hgvspc-puG__3aW3xm6gCzd0",
  authDomain: "chefapp-92b3c.firebaseapp.com",
  databaseURL: "https://chefapp-92b3c.firebaseio.com",
  projectId: "chefapp-92b3c",
  storageBucket: "chefapp-92b3c.appspot.com",
  messagingSenderId: "938311576581"
};

const config = process.env.NODE_ENV === 'production' ?
  prodConfig :
  devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};