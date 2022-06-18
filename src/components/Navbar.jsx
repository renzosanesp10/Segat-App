import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { logout } from '../functions/user'

export const Navbar = () => {
  const { user } = useContext(AuthContext)
  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark bg-dark px-5 position-sticky top-0'
      style={{ zIndex: 1000 }}
    >
      <Link to='/'>
        <img
          className='rounded'
          src='/images/logo.jpg'
          width={150}
          height={60}
        />
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ms-auto'>
          {!user ? (
            <>
              <li className='nav-item active'>
                <Link className='nav-link' to='/login'>
                  <span className='sr-only'>Iniciar sesión</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                  Registrarse
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  <span className='sr-only'>Registrar hecho</span>
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {user}
                </a>
                <ul
                  className='dropdown-menu'
                  style={{ top: '35px', left: '-105px' }}
                  aria-labelledby='navbarDropdown'
                >
                  <li>
                    <a className='dropdown-item' href='#'>
                      Ayuda
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a
                      className='dropdown-item'
                      type='button'
                      onClick={() => logout()}
                    >
                      Cerrar sesión
                    </a>
                  </li>
                </ul>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}
