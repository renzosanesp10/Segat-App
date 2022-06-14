import { Link } from 'react-router-dom'

import { Card } from '../components/Card'

export const Login = () => {
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
        </Card>
      </div>
    </div>
  )
}
