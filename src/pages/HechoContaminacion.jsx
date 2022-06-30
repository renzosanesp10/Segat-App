import Swal from 'sweetalert2'
import { useState, useContext, useRef } from 'react'
import withReactContent from 'sweetalert2-react-content'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import { AuthContext } from '../context/AuthContext'
import { getDocuRef, saveInfo } from '../functions/user'
import { storage } from '../firebase/credentials'

export const HechoContaminacion = () => {
  const MySwal = withReactContent(Swal)
  const { user } = useContext(AuthContext)
  const inputFileRef = useRef()
  const [progress, setProgress] = useState(0)

  const [hcdata, setHcdata] = useState({
    distrito: '',
    sector: '',
    contaminacion: '',
    evidencia: '',
    descripcion: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setHcdata({ ...hcdata, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const docuRef = getDocuRef(user.uid, 'hechos')
    const file = inputFileRef.current.files[0]
    uploadFiles(file, docuRef)
  }

  const uploadFiles = (file, docuRef) => {
    if (!file) return
    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      snapshot => {
        const prog =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(prog)
        console.log(prog)
      },
      error => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async url => {
          console.log('url', url)
          if (url) {
            await saveInfo(docuRef, { ...hcdata, evidencia: url })
            MySwal.fire({
              icon: 'success',
              title: 'Enviado'
            })
          }
        })
      }
    )
  }

  return (
    <div className='container'>
      <h2 className='mb-5'>Registro de Hecho de Contaminacion</h2>
      <form onSubmit={handleSubmit}>
        <div className='row mb-3'>
          <div className='col-md-6'>
            <label htmlFor='distrito' className='form-label'>
              Distrito
            </label>
            <input
              type='text'
              className='form-control'
              id='distrito'
              placeholder='Trujillo'
              name='distrito'
              onChange={handleChange}
            />
          </div>

          <div className='col-md-6'>
            <label htmlFor='sector' className='form-label'>
              Sector
            </label>
            <input
              type='text'
              className='form-control'
              id='sector'
              placeholder='Santa Maria'
              name='sector'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-md-6'>
            <label htmlFor='tipo-conta' className='form-label'>
              Tipo de Contaminacion
            </label>
            <input
              type='text'
              className='form-control'
              id='tipo-conta'
              placeholder='Sonora'
              name='contaminacion'
              onChange={handleChange}
            />
          </div>

          <div className='col-md-6'>
            <label htmlFor='evidencia' className='form-label'>
              Evidencia
            </label>
            <input
              type='file'
              className='form-control'
              id='evidencia'
              placeholder='Adjunta tu evidencia aqui'
              ref={inputFileRef}
            />
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-md-12'>
            <label htmlFor='descripcion' className='form-label'>
              Descripcion del Hecho de Contaminacion
            </label>
            <textarea
              className='form-control'
              id='descripcion'
              placeholder='Escribir descripcion aqui'
              name='descripcion'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='d-flex justify-content-end'>
          <button className='btn btn-primary'>Enviar Registro</button>
        </div>
      </form>
    </div>
  )
}
