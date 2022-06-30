import { useState, useEffect } from 'react'
import { MDBDataTableV5 } from 'mdbreact'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../firebase/credentials'

export const Registrohc = () => {
  const db = getFirestore(app)

  const [users, setUsers] = useState([])
  const [hechos, setHechos] = useState([])
  const [loading, setLoading] = useState(true)
  const [datatable, setDatatable] = useState({
    columns: [
      /* {
        label: 'Nombres',
        field: 'name',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Nombres'
        }
      },
      {
        label: 'Apellidos',
        field: 'surname'
      },
      {
        label: 'Correo',
        field: 'email'
      },
      {
        label: 'Telefono',
        field: 'phone'
      } ,*/
      {
        label: 'Distrito',
        field: 'distrito'
      },
      {
        label: 'Sector',
        field: 'sector'
      },
      {
        label: 'Descripción',
        field: 'descripcion'
      },
      {
        label: 'Contaminación',
        field: 'contaminacion'
      },
      {
        label: 'Evidencia',
        field: 'evidencia'
      }
    ]
  })

  const getData = async () => {
    const usersQuerySnapshot = await getDocs(collection(db, 'users'))
    const hechosQuerySnapshot = await getDocs(collection(db, 'hechos'))
    /* console.log('users', usersQuerySnapshot)
    console.log('hechos', hechosQuerySnapshot) */
    usersQuerySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      /* console.log('users', doc.id, ' => ', doc.data()) */
      users.push({ id: doc.id, data: doc.data() })
      setUsers(users.slice())
    })
    hechosQuerySnapshot.forEach(doc => {
      /* console.log('hechos', doc.id, ' => ', doc.data()) */
      hechos.push({ id: doc.id, data: doc.data() })
      setHechos(hechos.slice())
    })
    setLoading(false)
  }

  useEffect(() => {
    getData()
    setDatatable({ ...datatable, rows: hechos.map(e => e.data) })
  }, [loading])

  console.log(hechos)

  return (
    <div className='w-75 d-flex mx-auto justify-content-center'>
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
      />
    </div>
  )
}
