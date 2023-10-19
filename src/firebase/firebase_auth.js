// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


//import { getAnalytics } from "firebase/analytics";  // Si se activa analiticas de Google

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBout7Gh9xN9ONmn2W4UILbmWcUmcmZlIY",
//   authDomain: "ecommerce-17ed3.firebaseapp.com",
//   databaseURL: "https://ecommerce-17ed3-default-rtdb.firebaseio.com",
//   projectId: "ecommerce-17ed3",
//   storageBucket: "ecommerce-17ed3.appspot.com",
//   messagingSenderId: "284016553850",
//   appId: "1:284016553850:web:ff3ba4ee714fd1a48270c3",
// };

const firebaseConfig = {
  apiKey: "AIzaSyB9JTPFDmQEbKDce2wkalsmiGLxonD4Emk",                        //"TU_CLAVE_DE_API_WEB"
  authDomain: "reactnative-app-1629b.firebaseapp.com",                      //"TU_NOMBRE_DEL_PROYECTO.firebaseapp.com"
  databaseURL: "https://reactnative-app-1629b-default-rtdb.firebaseio.com", //"TU_ID_DEL_PROYECTO"
  projectId: "reactnative-app-1629b",                                             //"TU_ID_DEL_PROYECTO"
  storageBucket: "reactnative-app-1629b.appspot.com",                             //"TU_NOMBRE_DEL_PROYECTO.appspot.com"
  messagingSenderId: "959531699675",                                        //"TU_NUMERO_DE_PROYECTO"
  appId: "1:959531699675:web:fec780ed9b441ae0dfebfe",                       //"1:TU_NUMERO_DE_PROYECTO:web:XXXXXXXXXXXX"
  measurementId: "G-9LS5CKPMDP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const firebase_auth = getAuth(app);

//export const analytics = getAnalytics(app); // Si se activa naliticas de Google
