import { getDoc } from 'firebase/firestore'
import { createContext, useState, useEffect } from 'react'
import { getDocuRef, session } from '../functions/user'

export const AuthContext = createContext()

const Provider = ({ children }) => {
  const [user, setUser] = useState(null)

  const getUserData = async userFirebase => {
    const docuRef = getDocuRef(userFirebase.uid)
    const docSnap = await getDoc(docuRef)
    if (docSnap.exists()) {
      const { name } = docSnap.data()
      setUser({ name })
    } else {
      console.log('No hay documentos')
    }
  }

  session(userFirebase => {
    if (userFirebase) {
      if (!user) {
        getUserData(userFirebase)
      }
    } else {
      setUser(null)
    }
  })

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

const Auth = { Provider }

export default Auth