import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.css'

export const Login = () => {
  return (
    <div className='contenedor'>
      <div className='w-25 card'>
        <div className='card-header text-center'>
          <h2>Inicio de Sesión</h2>
        </div>
        <div className='card-body'>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Correo
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleFormControlInput1' className='form-label'>
              Contraseña
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='******'
            />
          </div>
          <div className='mb-3 d-flex justify-content-center'>
            <button className='btn btn-primary'>Iniciar Sesión</button>
          </div>
        </div>
        <div className='card-footer d-flex justify-content-center align-items-center gap-2'>
          <p className='m-0'>¿No tiene una cuenta?</p>
          <Link to='/register'>Registrese</Link>
        </div>
      </div>
    </div>
  )
}
