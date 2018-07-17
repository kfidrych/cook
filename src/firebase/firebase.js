import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyBvNCBR3D99GOrJ1AszQ-nBiS7W7Uoj_Tc",
  authDomain: "cook-37da3.firebaseapp.com",
  databaseURL: "https://cook-37da3.firebaseio.com",
  projectId: "cook-37da3",
  storageBucket: "cook-37da3.appspot.com",
  messagingSenderId: "879357961553"
};

const devConfig = {
  apiKey: "AIzaSyBvNCBR3D99GOrJ1AszQ-nBiS7W7Uoj_Tc",
  authDomain: "cook-37da3.firebaseapp.com",
  databaseURL: "https://cook-37da3.firebaseio.com",
  projectId: "cook-37da3",
  storageBucket: "cook-37da3.appspot.com",
  messagingSenderId: "879357961553"
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