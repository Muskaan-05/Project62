import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-57h572zw14fegkK9pY8fFNPyozwXj5k",
    authDomain: "project60-8d147.firebaseapp.com",
    projectId: "project60-8d147",
    storageBucket: "project60-8d147.appspot.com",
    messagingSenderId: "927268383237",
    appId: "1:927268383237:web:051549047dc3bef16a8a6c"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  