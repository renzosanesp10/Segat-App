import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './styles/globalStyles.css'
import { Register } from './pages/Register'
import {HechoContaminacion} from './pages/HechoContaminacion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/hecho-contaminacion' element={<HechoContaminacion />} />
    </Routes>
  </BrowserRouter>
)
