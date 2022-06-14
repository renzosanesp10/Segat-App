import AuthContext from './AuthContext'

export const Providers = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>
}
