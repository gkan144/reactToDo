import firebase from 'firebase';

try {
  let config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  console.log(config, process.env);
  firebase.initializeApp(config);
} catch(error) {

}

export let githubProvider = new firebase.auth.GithubAuthProvider();
export let firebaseRef = firebase.database().ref();
export default firebase;
