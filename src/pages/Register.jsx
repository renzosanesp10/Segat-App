import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Card } from '../components/Card'
import { getDocuRef, register, saveInfo } from '../functions/user'

export const Register = () => {
  const navigate = useNavigate()
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    surname: '',
    dni: '',
    email: '',
    phone: '',
    password: '',
    role: 'user'
  })

  const handleChange = e => {
    const { name, value } = e.target
    setRegisterInfo({ ...registerInfo, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const info = await register(registerInfo.email, registerInfo.password)
      const docuRef = getDocuRef(info.user.uid, 'users')
      const { name, surname, dni, email, phone, role } = registerInfo
      await saveInfo(docuRef, { name, surname, dni, email, phone, role })
      navigate('/hecho-contaminacion')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='container_background'>
      <div className='w-50'>
        <Card
          header={<h2 className='text-center'>Registro</h2>}
          footer={
            <div className='d-flex justify-content-center align-items-center gap-2'>
              <p className='m-0'>¿Ya tienes una cuenta?</p>
              <Link to='/login'>Iniciar Sesion</Link>
            </div>
          }
        >
          <form onSubmit={handleSubmit}>
            <div className='row mb-3'>
              <label className='col-6 form-label'>
                Nombres
                <input
                  type='text'
                  name='name'
                  placeholder='Nombres'
                  className='form-control'
                  onChange={handleChange}
                  value={registerInfo.name}
                />
              </label>
              <label className='col-6 form-label'>
                Apellidos
                <input
                  type='text'
                  name='surname'
                  placeholder='Apellidos'
                  className='form-control'
                  onChange={handleChange}
                  value={registerInfo.surname}
                />
              </label>
            </div>
            <div className='row mb-3'>
              <label className='col-6 form-label'>
                Dni
                <input
                  type='text'
                  name='dni'
                  placeholder='71986383'
                  onChange={handleChange}
                  className='form-control'
                  value={registerInfo.dni}
                />
              </label>
              <label className='col-6 form-label'>
                Correo Electronico
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  className='form-control'
                  value={registerInfo.email}
                  placeholder='correo@example.com'
                />
              </label>
            </div>
            <div className='row mb-3'>
              <label className='col-6 form-label'>
                Celular
                <input
                  type='text'
                  name='phone'
                  placeholder='999666999'
                  className='form-control'
                  onChange={handleChange}
                  value={registerInfo.phone}
                />
              </label>
              <label className='col-6 form-label'>
                Contraseña
                <input
                  type='password'
                  name='password'
                  placeholder='******'
                  className='form-control'
                  onChange={handleChange}
                  value={registerInfo.password}
                />
              </label>
            </div>
            <div className='mb-3 d-flex justify-content-center'>
              <button className='btn btn-primary w-50'>Registrarse</button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
