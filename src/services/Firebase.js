import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZ5FQV3m79f-sfzUJL61MOw7p34NZrsgg",
  authDomain: "crud-numeros-primos.firebaseapp.com",
  projectId: "crud-numeros-primos",
  storageBucket: "crud-numeros-primos.appspot.com",
  messagingSenderId: "489669430623",
  appId: "1:489669430623:web:7bd1523ff9893743f53aea"
};


export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;