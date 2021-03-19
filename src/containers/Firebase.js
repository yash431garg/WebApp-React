import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
require('dotenv').config();

const firebaseConfig = {
  apiKey: "AIzaSyAQaQHoA-w6F3qdcHrzk607ZW8BS-J5pqk",
  authDomain: "bigbusinessapp-web-react.firebaseapp.com",
  databaseURL: "https://bigbusinessapp-web-react-default-rtdb.firebaseio.com",
  projectId: "bigbusinessapp-web-react",
  storageBucket: "bigbusinessapp-web-react.appspot.com",
  messagingSenderId: "600046682313",
  appId: "1:600046682313:web:11fc5e5993d8ecf981cd18"
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
