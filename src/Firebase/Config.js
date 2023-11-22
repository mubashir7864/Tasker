// Import the functions you need from the SDKs you need
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG2cSidfbisg5TTCLs9N-TgcdXSHexaZo",
  authDomain: "taskmanager-70d8e.firebaseapp.com",
  projectId: "taskmanager-70d8e",
  storageBucket: "taskmanager-70d8e.appspot.com",
  messagingSenderId: "666827596772",
  appId: "1:666827596772:web:4f16bf65c5748743155df1",
  measurementId: "G-PP3NLCJXD2"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);

// Initialtialize firebase authentication and get a reference to the service

export const auth = getAuth(Firebaseapp)

// fireStore

export const db = getFirestore(Firebaseapp)