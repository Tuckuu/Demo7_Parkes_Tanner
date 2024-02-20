//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBrrH_L7PCUCIFs_QYGHof8PYnfw1XQdc",
    authDomain: "comp1800-57faf.firebaseapp.com",
    projectId: "comp1800-57faf",
    storageBucket: "comp1800-57faf.appspot.com",
    messagingSenderId: "1071435250730",
    appId: "1:1071435250730:web:829e6f4bee083eb433d753"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
