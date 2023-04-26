import React from 'react'
import LoginPage from '../components/LoginPage'
import { useState } from 'react'

import Modal from '../components/Modal'
function Login() {
  const [state, setState] = useState('start')
  return (
    <div>
      <div>Login
      <LoginPage/>
    </div>
    <>
    <div>Login</div>
    {/* <Modal
          VisibilidadModal={VisibilidadModal}
          setVisibilidadModal={setVisibilidadModal}
          title="Rol de los campeones"
        >
          <div className="mt-4 flex flex-col gap-4 relative">
            {roles?.map((rol, i) => (
              <Link
                to={rol?.route}
                key={i}
                className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
              >
                <div>{React.createElement(rol?.icon, { size: 20 })}</div>

                <h2 className="whitespace-pre duration-500">{rol?.rol}</h2>
              </Link>
            ))}
          </div>
        </Modal> */}
        </>
    </div>
    
  )
}

export default Login