import React from 'react'
import MainLoginPage from '../components/MainLoginPage'
import { useState } from 'react'

function Login() {
  const [state, setState] = useState('start')
  return (
    <div>Login

      <MainLoginPage login={this.triggerLogin}/>
    </div>
  )
}

export default Login