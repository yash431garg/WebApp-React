import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDwPtLhbNwh8obwiypkqlczLeAvRBFQ8q0",
    authDomain: "bigbusinessapp-63860.firebaseapp.com",
    databaseURL: "https://bigbusinessapp-63860-default-rtdb.firebaseio.com",
    projectId: "bigbusinessapp-63860",
    storageBucket: "bigbusinessapp-63860.appspot.com",
    messagingSenderId: "729856840133",
    appId: "1:729856840133:web:19903e7057e70e2e2f3bac",
    measurementId: "G-F2K459TVZZ"
};
// Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB.database();
