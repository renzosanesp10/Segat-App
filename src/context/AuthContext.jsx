import { getDoc } from 'firebase/firestore'
import { createContext, useState, useEffect } from 'react'
import { getDocuRef, session } from '../functions/user'

export const AuthContext = createContext()

const Provider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const getUserData = async userFirebase => {
    const docuRef = getDocuRef(userFirebase.uid, 'users')
    const docSnap = await getDoc(docuRef)
    if (docSnap.exists()) {
      const { name, role } = docSnap.data()
      setUser({ name, role, uid: userFirebase.uid })
      setLoading(false)
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
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

const Auth = { Provider }

export default Auth
