// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import {
  getFirestore
} from "firebase/firestore";
import 'firebase/auth';
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyDnqaVhoI59vUoQdJ1FZkhxBEAOlltfqOs",
//   authDomain: "objetosperdidos-6455f.firebaseapp.com",
//   projectId: "objetosperdidos-6455f",
//   storageBucket: "objetosperdidos-6455f.appspot.com",
//   messagingSenderId: "1017119667090",
//   appId: "1:1017119667090:web:b89761baf7aa072805c74b",
//   measurementId: "G-6XSCVV41DH"
// };

const firebaseConfig = {
  apiKey: "AIzaSyC6V84Hwn9StuKkHW8hgleOPW0IqDbAkoI",
  authDomain: "objetosperdidos-ab4d3.firebaseapp.com",
  databaseURL: "https://objetosperdidos-ab4d3-default-rtdb.firebaseio.com",
  projectId: "objetosperdidos-ab4d3",
  storageBucket: "objetosperdidos-ab4d3.appspot.com",
  messagingSenderId: "985986295604",
  appId: "1:985986295604:web:9535acc377930999f2a761"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);



export {
  app
}
export default db;