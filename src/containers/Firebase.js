import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
require('dotenv').config();

const firebaseConfig = {
  apiKey: "AIzaSyDwPtLhbNwh8obwiypkqlczLeAvRBFQ8q0",
  authDomain: "bigbusinessapp-63860.firebaseapp.com",
  databaseURL: "https://bigbusinessapp-63860-default-rtdb.firebaseio.com",
  projectId: "bigbusinessapp-63860",
  storageBucket: "bigbusinessapp-63860.appspot.com",
  messagingSenderId: "729856840133",
  appId: "1:729856840133:web:19903e7057e70e2e2f3bac",
  measurementId: "G-F2K459TVZZ"
};

class firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.normalauth = app.auth;
    this.database = app.database();
  }

  login(phone, appverifier) {
    const countryCode = '+91';
    return this.auth.signInWithPhoneNumber(countryCode.concat(phone), appverifier);
  }


  logout(message) {
    alert('Log Out: ' + message);
    return this.auth.signOut();
  }
}

export default new firebase()
