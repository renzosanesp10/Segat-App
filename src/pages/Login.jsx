import { getDoc } from 'firebase/firestore'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Card } from '../components/Card'
import { getDocuRef, login } from '../functions/user'

export const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const logedUser = await login(loginData.email, loginData.password)
      const docuRef = getDocuRef(logedUser.user.uid, 'users')
      const docSnap = await getDoc(docuRef)
      if (docSnap.exists()) {
        const { role } = docSnap.data()
        if (role === 'admin') {
          navigate('/registro-hc')
        } else {
          navigate('/hecho-contaminacion')
        }
      } else {
        console.log('No hay documentos')
      }
    } catch (error) {
      console.log('error login', error.message)
    }
  }

  return (
    <div className='container_background'>
      <div className='w-25'>
        <Card
          header={<h2 className='text-center'>Inicio de Sesión</h2>}
          footer={
            <div className='d-flex justify-content-center align-items-center gap-2'>
              <p className='m-0'>¿No tiene una cuenta?</p>
              <Link to='/register'>Registrese</Link>
            </div>
          }
        >
          <form onSubmit={handleSubmit}>
            <div className='row mb-3'>
              <label className='form-label'>
                Correo
                <input
                  type='email'
                  name='email'
                  value={loginData.email}
                  onChange={handleChange}
                  className='form-control'
                  placeholder='name@example.com'
                />
              </label>
            </div>
            <div className='row mb-3'>
              <label className='form-label'>
                Contraseña
                <input
                  type='password'
                  name='password'
                  value={loginData.password}
                  onChange={handleChange}
                  className='form-control'
                  placeholder='******'
                />
              </label>
            </div>
            <div className='mb-3 d-flex justify-content-center'>
              <button className='btn btn-primary'>Iniciar Sesión</button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
