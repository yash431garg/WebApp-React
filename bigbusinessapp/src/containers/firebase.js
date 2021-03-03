import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSENGING_ID,
  appId: process.env.REACT_APP_APP_ID
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


  logout() {
    return this.auth.signOut();
  }
}


export default new firebase()
