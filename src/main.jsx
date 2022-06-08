import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { LayoutContainer } from './layouts/LayoutContainer'
import { HechoContaminacion } from './pages/HechoContaminacion'
import { Registrohc } from './pages/Registrohc'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles/globalStyles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LayoutContainer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/hecho-contaminacion' element={<HechoContaminacion />} />
        <Route path='/Registro-hc' element={<Registrohc />} />
      </Routes>
    </LayoutContainer>
  </BrowserRouter>
)
