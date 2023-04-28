import { useState } from 'react'
import React from 'react'
import './LoginPage.css'

function MainLoginPage() {
  const [isActive, setIsActive] = useState(false);

  const triggerClick = event => {
    setIsActive(current => !current);
  };

  const endpoint = "http://127.0.0.1:8000/api";
  const [emailUser, setEmailUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [pwsUser, setPwsUser] = useState('');
  const [lastnameUser, setLastnameUser] = useState('');

  const [emailLogin, setEmailLogin] = useState('');
  const [pwsLogin, setPwsLogin] = useState('');

  async function newUser(e) {
    e.preventDefault();
    console.log("enviando");
    await fetch(`${endpoint}/login/registro`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: nameUser,
        apellido: lastnameUser,
        correo: emailUser,
        contraseña: pwsUser,
      })
    })
      .then(data => data.json())
      .then(data => {
        console.log(data)
      });
  }

  async function loginUser(e) {
    e.preventDefault();
    console.log("enviando");
    const response = await fetch(`${endpoint}/login`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        correo: emailLogin
        // contraseña: pwsLogin,
      })
    })
      .then(data => data.json())
      console.log(response);
  }
  return (

    <div class="body">
      <div className={isActive ? 'right-panel-active container_principal' : 'container_principal'} id="container">
        <div class="form-container register-container">
          <form className='formulario' onSubmit={newUser}>

            <h1 className='h1a'>Registrarse</h1>

            <input className='input_login' type="text" placeholder="Nombre" required value={nameUser} onChange={(e) => setNameUser(e.target.value)} />

            <input className='input_login' type="text" placeholder="Apellido" required value={lastnameUser} onChange={(e) => setLastnameUser(e.target.value)} />

            <input className='input_login' type="email" placeholder="Correo" required value={emailUser} onChange={(e) => setEmailUser(e.target.value)} />

            <input className='input_login' type="password" placeholder="Contraseña" required value={pwsUser} onChange={(e) => setPwsUser(e.target.value)} />

            <button className='btn_login'>Registrarse</button>

          </form>
        </div>
        <div class="form-container login-container">
          <form className='formulario' onSubmit={loginUser}>
            <h1 className='h1a'>Iniciar sesion</h1>

            <input className='input_login' type="text" placeholder="Correo" required value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)}/>

            <input className='input_login' type="password" placeholder="Contraseña" required value={pwsLogin} onChange={(e) => setPwsLogin(e.target.value)} />

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