import { useState } from 'react'
import React from 'react'
import './LoginPage.css'
// import './LoginPageJS.js'

function MainLoginPage() {
  const [isActive, setIsActive] = useState(false);

  const triggerClick = event => {
    setIsActive(current => !current);
  };

    return (

      <div class="body">
        <div  className = {isActive ? 'right-panel-active container' : 'container'} id="container">
          <div class="form-container sign-up-container">
            <form action="#">

              <h1>Create Account</h1>
              
              <input type="text" placeholder="Name" />
            
              <input type="email" placeholder="Email" />
            
              <input type="password" placeholder="Password" />
            
              <button>Sign Up</button>
             
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>

              <input type="text" placeholder="Email" />
            
              <input type="password" placeholder="Password" />
              
              <a href="">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-register">
                <img></img>
                <h1>Bienvenido</h1>
                <button onClick={triggerClick} class="btn" id="signIn">Sign up</button>
              </div>
              <div class="overlay-panel overlay-login">
                <img></img>
                <h1>Hola de nuevo!</h1>
                <button onClick={triggerClick} class="btn" id="signUp">Sign in</button>
              </div>
            </div>
          </div>
          </div>
      </div>
      
      
    )
  }
  
  export default MainLoginPage