import { Navbar } from '../components/Navbar'
import { Providers } from './../context/Providers'

export const LayoutContainer = ({ children }) => {
  return (
    <Providers>
      <Navbar />
      {children}
    </Providers>
  )
}
