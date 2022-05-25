import React from 'react'

export const HechoContaminacion = () => {
  return (
    <div className='container'>
      <h2 className='mb-5'>Registro de Hecho de Contaminacion</h2>
      <div className='row mb-3'>
        <div className='col-md-6'>
          <label htmlFor='fullname' className='form-label'>
            Nombres y Apellidos
          </label>
          <input
            type='text'
            className='form-control'
            id='fullname'
            placeholder='Juan Medina'
          />
        </div>

        <div className='col-md-6'>
          <label htmlFor='distrito' className='form-label'>
            Distrito
          </label>
          <input
            type='text'
            className='form-control'
            id='distrito'
            placeholder='Trujillo'
          />
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col-md-6'>
          <label htmlFor='sector' className='form-label'>
            Sector
          </label>
          <input
            type='text'
            className='form-control'
            id='sector'
            placeholder='Santa Maria'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='tipo-conta' className='form-label'>
            Tipo de Contaminacion
          </label>
          <input
            type='text'
            className='form-control'
            id='tipo-conta'
            placeholder='Sonora'
          />
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col-md-6'>
          <label htmlFor='evidencia' className='form-label'>
            Evidencia
          </label>
          <input
            type='file'
            className='form-control'
            id='evidencia'
            placeholder='Adjunta tu evidencia aqui'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='descripcion' className='form-label'>
            Descripcion del Hecho de Contaminacion
          </label>
          <textarea
            className='form-control'
            id='descripcion'
            placeholder='Escribir descripcion aqui'
          />
        </div>
      </div>
      <div className='d-flex justify-content-end'>
        <button className='btn btn-primary'>Enviar Registro</button>
      </div>
    </div>
  )
}
