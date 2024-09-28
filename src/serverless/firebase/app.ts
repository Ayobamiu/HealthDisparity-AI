// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { HealthData, UserData } from "../../Data/types";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);

export async function getUserData(email: string) {
  try {
    const docSnap = await getDoc(doc(db, "userData", email));
    if (docSnap.exists()) {
      return docSnap.data() as UserData;
    }
    return null;
  } catch (error) {
    console.error("Error checking or creating userData:", error);
    return null;
  }
}
export async function createUserData(email: string, userDoc: UserData) {
  try {
    // Save data in Firestore
    await setDoc(doc(db, "userData", email), userDoc);
    return userDoc;
  } catch (error) {
    console.error("Error creating userData:", error);
    return null;
  }
}
export async function getHealthData(email: string) {
  try {
    const docSnap = await getDoc(doc(db, "healthData", email));
    if (docSnap.exists()) {
      return docSnap.data() as HealthData;
    }
    return null;
  } catch (error) {
    console.error("Error checking or creating healthData:", error);
    return null;
  }
}
export async function createHealthData(email: string, healthDoc: HealthData) {
  try {
    // Save data in Firestore
    await setDoc(doc(db, "healthData", email), healthDoc);
    return healthDoc;
  } catch (error) {
    console.error("Error creating healthData:", error);
    return null;
  }
}
