import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAT8ZkdBrLtXSWx_smXZm07xxUOphHmG7k",
    authDomain: "react-5320e.firebaseapp.com",
    projectId: "react-5320e",
    storageBucket: "react-5320e.appspot.com",
    messagingSenderId: "164246896",
    appId: "1:164246896:web:7537ca8aba6f1808930bb5"
  };



const app = initializeApp(firebaseConfig);
const dbService = getFirestore(app);

export {dbService, collection, addDoc};