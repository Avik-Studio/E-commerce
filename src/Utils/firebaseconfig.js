import firebase from "firebase/compat/auth";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOF01tqgvMR50T-pYrgqku0qeHhhlkAN0",
  authDomain: "ecommercewebsite-121f2.firebaseapp.com",
  projectId: "ecommercewebsite-121f2",
  storageBucket: "ecommercewebsite-121f2.firebasestorage.app",
  messagingSenderId: "567054388086",
  appId: "1:567054388086:web:26ec9fb94274c6974e4857",
  measurementId: "G-MKCMHGJ4JY",
};

if (firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;