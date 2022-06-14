import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

import { app } from '../firebase/credentials'

export class User {
  #dni
  #uid
  #auth
  #name
  #phone
  #email
  #surname
  #password

  constructor (setSession) {
    this.#auth = getAuth(app)
    this.session(setSession)
  }

  async register () {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.#auth,
        this.#email,
        this.#password
      )
      return userCredential
    } catch (error) {
      console.error(error.message)
    }
  }

  signOut () {
    signOut(this.#auth)
  }

  setData ({ name, surname, dni, phone, email, password }) {
    this.#name = name
    this.#surname = surname
    this.#dni = dni
    this.#phone = phone
    this.#email = email
    this.#password = password
  }

  getData () {
    return {
      name: this.#name,
      surname: this.#surname,
      dni: this.#dni,
      phone: this.#phone,
      email: this.#email,
      password: this.#password
    }
  }

  session (setSession) {
    onAuthStateChanged(this.#auth, user => {
      if (user) {
        setSession(user)
      } else {
        setSession(null)
      }
    })
  }

  getUid () {
    return this.#uid
  }

  getName () {
    return this.#name
  }
}
