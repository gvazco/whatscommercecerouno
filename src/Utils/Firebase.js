import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2ouaginnYam0JEeN1ks_FxQUsbfOf4HM",
  authDomain: "whatscommerce-b8490.firebaseapp.com",
  projectId: "whatscommerce-b8490",
  storageBucket: "whatscommerce-b8490.appspot.com",
  messagingSenderId: "621708385529",
  appId: "1:621708385529:web:3ac355753ed130649fd628",
};
// Initialize Firebase
export const firebaseapp = firebase.initializeApp(firebaseConfig);
