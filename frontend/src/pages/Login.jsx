import React from 'react'
import LoginPage from '../components/LoginPage'
import { useState } from 'react'

function Login() {
  const [state, setState] = useState('start')
  return (
    <div>Login
      <LoginPage/>
    </div>
  )
}

export default Login