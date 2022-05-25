import React from 'react'
import { Navbar } from '../components/Navbar'

export const LayoutContainer = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}
