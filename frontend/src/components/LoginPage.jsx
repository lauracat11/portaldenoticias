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
          <div class="form-container sign-up-container">
            <form action="">

              <h1>Register</h1>
              
              <input type="text" placeholder="Name" required/>
            
              <input type="email" placeholder="Email" required/>
            
              <input type="password" placeholder="Password" required/>
            
              <button>Register</button>
             
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="">
              <h1>Login</h1>

              <input type="text" placeholder="Email" required/>
            
              <input type="password" placeholder="Password" required/>
              
              <a href="">Forgot your password?</a>
              <button>Login</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-register">
                <img></img>
                <h1>Bienvenido</h1>
                <a>Si todavía no te has registrado, puedes</a> <a>hacerlo para tener una experiencia</a> <a>personalizada y enterarte de todo lo que está pasando.</a>
                <button onClick={triggerClick} class="btn" id="signIn">Register</button>
              </div>
              <div class="overlay-panel overlay-login">
                <img></img>
                <h1>Hola de nuevo!</h1>
                <a></a>
                <button onClick={triggerClick} class="btn" id="signUp">Login</button>
              </div>
            </div>
          </div>
          </div>
      </div>
      
      
    )
  }
  
  export default MainLoginPage