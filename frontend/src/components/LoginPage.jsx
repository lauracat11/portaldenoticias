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
        <div  className = {isActive ? 'right-panel-active container' : 'container'} id="container">
          <div class="form-container register-container">
            <form action="">

              <h1>Registrarse</h1>
              
              <input type="text" placeholder="Nombre" required/>
            
              <input type="email" placeholder="Correo" required/>
            
              <input type="password" placeholder="Contraseña" required/>
            
              <button>Registrarse</button>
             
            </form>
          </div>
          <div class="form-container login-container">
            <form action="">
              <h1>Iniciar sesion</h1>

              <input type="text" placeholder="Correo" required/>
            
              <input type="password" placeholder="Contraseña" required/>
              
              <a href="">Has olvidado tu contraseña?</a>
              <button>Iniciar sesion</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-register">
                <img></img>
                <h1>Bienvenido</h1>
                <a>Si todavía no te has registrado, puedes</a> <a>hacerlo para tener una experiencia</a> <a>personalizada y enterarte de todo lo que está pasando.</a>
                <button onClick={triggerClick} class="btn" id="register">Registrarse</button>
              </div>
              <div class="overlay-panel overlay-login">
                <img></img>
                <h1>Hola de nuevo!</h1>
                <a></a>
                <button onClick={triggerClick} class="btn" id="login">Iniciar sesion</button>
              </div>
            </div>
          </div>
          </div>
      </div>
      
      
    )
  }
  
  export default MainLoginPage