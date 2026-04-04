import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

// Auth helpers
export const loginAdmin = (email, password) => signInWithEmailAndPassword(auth, email, password)
export const logoutAdmin = () => signOut(auth)
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback)

// Firestore helpers
export async function getData(collection) {
  try {
    const snap = await getDoc(doc(db, 'nomadcraft', collection))
    return snap.exists() ? snap.data().value : null
  } catch (e) {
    console.error(`Firestore GET ${collection}:`, e)
    return null
  }
}

export async function setData(collection, value) {
  try {
    await setDoc(doc(db, 'nomadcraft', collection), { value, updatedAt: new Date().toISOString() })
  } catch (e) {
    console.error(`Firestore SET ${collection}:`, e)
  }
}
