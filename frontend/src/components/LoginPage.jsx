import { useState } from 'react'
import React from 'react'
import './LoginPage.css'

function MainLoginPage() {
  const [isActive, setIsActive] = useState(false);

  const triggerClick = event => {
    setIsActive(current => !current);
  };

  return (

    <div class="body">
      <div className={isActive ? 'right-panel-active container_principal' : 'container_principal'} id="container">
        <div class="form-container register-container">
          <form className='formulario' action="">

            <h1 className='h1a'>Registrarse</h1>

            <input className='input_login' type="text" placeholder="Nombre" required />

            <input className='input_login' type="text" placeholder="Apellido" required />

            <input className='input_login' type="email" placeholder="Correo" required />

            <input className='input_login' type="password" placeholder="Contraseña" required />

            <button className='btn_login'>Registrarse</button>

          </form>
        </div>
        <div class="form-container login-container">
          <form className='formulario' action="">
            <h1 className='h1a'>Iniciar sesion</h1>

            <input className='input_login' type="text" placeholder="Correo" required />

            <input className='input_login' type="password" placeholder="Contraseña" required />

            <a className='a' href="">Has olvidado tu contraseña?</a>
            <button className='btn_login'>Iniciar sesion</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-register">
              <img></img>
              <h1 className='h1a'>Bienvenido</h1>
              <a className='a2'>Si todavía no te has registrado, puedes</a> <a className='a2'>hacerlo para tener una experiencia</a> <a className='a2'>personalizada y enterarte de todo lo que está pasando.</a>
              <button onClick={triggerClick} class="btn btn_login" id="register">Registrarse</button>
            </div>
            <div class="overlay-panel overlay-login">
              <img></img>
              <h1 className='h1a'>Hola de nuevo!</h1>
              <a></a>
              <button onClick={triggerClick} class="btn btn_login" id="login">Iniciar sesion</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default MainLoginPage