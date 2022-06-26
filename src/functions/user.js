import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'

import { getFirestore, doc, setDoc } from 'firebase/firestore'

import { app } from '../firebase/credentials'

const auth = getAuth(app)
const store = getFirestore(app)

export const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredential
  } catch (error) {
    return error
  }
}

export const session = callback => {
  onAuthStateChanged(auth, userFirebase => {
    callback(userFirebase)
  })
}

export const logout = () => {
  signOut(auth)
}

export const getDocuRef = (id, document) => {
  return doc(store, document, id)
}

export const saveInfo = async (docuRef, data) => {
  await setDoc(docuRef, data)
}

export const login = async (email, password) => {
  try {
    const userLogin = await signInWithEmailAndPassword(auth, email, password)
    return userLogin
  } catch (error) {
    throw new Error(error)
  }
}
