import firebase from 'firebase';

try {
  let config = {
    apiKey: "AIzaSyCItUJKl7CV7wlhNpSA6AYdq1kdZoCT3fs",
    authDomain: "reacttodoapp-b17a9.firebaseapp.com",
    databaseURL: "https://reacttodoapp-b17a9.firebaseio.com",
    storageBucket: "reacttodoapp-b17a9.appspot.com",
    messagingSenderId: "1059312234891"
  };

  firebase.initializeApp(config);
} catch(error) {

}

export let firebaseRef = firebase.database().ref();
export default firebase;
