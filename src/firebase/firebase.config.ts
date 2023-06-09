// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_REACT_APP_API_KEY,
  authDomain: process.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: process.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: process.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_REACT_APP_MESSAGING_SENDER,
  appId: process.env.VITE_REACT_APP_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const database = getDatabase(app)