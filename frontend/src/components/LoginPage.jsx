import React from 'react'
import './LoginPage.css'

function MainLoginPage() {
    return (
      // <div>
      //   <form action="">
      //       <label className='user'>
      //           <input type="text" name="user" id="user" placeholder="User" />
      //       </label>
      //       <label className='pass'>
      //           <input type="password" name="pass" id="pass" placeholder="Password"/>
      //       </label>
      //       <label className='button'>
      //           <button type="submit">Login</button>
      //       </label>
      //   </form>
      // </div>
      <div class="body">
        <div class="container" id="container">
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
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-register">
                <h1>Bienvenido</h1>
                <p></p>
                <button class="btn" id="signIn">Sign in</button>
              </div>
              <div class="overlay-panel overlay-login">
                <h1>Hola de nuevo!</h1>
                <p></p>
                <button class="btn" id="signUp">Sign up</button>
              </div>
            </div>
          </div>
          <script src='./LoginPageJS.jsx'></script>
          </div>
      </div>
      
      
    )
  }
  
  export default MainLoginPage