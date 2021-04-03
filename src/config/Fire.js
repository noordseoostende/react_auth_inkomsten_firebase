import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDWXEnPTg6OlZR_RMLEq4jnLYeqy9w5Akg",
  authDomain: "vicode-tutorial-fc0e3.firebaseapp.com",
  projectId: "vicode-tutorial-fc0e3",
  storageBucket: "vicode-tutorial-fc0e3.appspot.com",
  messagingSenderId: "815398861298",
  appId: "1:815398861298:web:68f1f7d00af75ca603536b",
  measurementId: "G-81BY3SYX2Z"
}

const fire = firebase.initializeApp(config);
export default fire;
