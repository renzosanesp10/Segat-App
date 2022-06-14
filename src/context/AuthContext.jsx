import { createContext, useState, useEffect } from 'react'
import { User } from '../class/user'

export const AuthContext = createContext()

const Provider = ({ children }) => {
  const [user, setUser] = useState(null)
  const objUser = new User(setUser)

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <AuthContext.Provider value={{ user, setUser, objUser }}>
      {children}
    </AuthContext.Provider>
  )
}

const Auth = { Provider }

export default Auth
