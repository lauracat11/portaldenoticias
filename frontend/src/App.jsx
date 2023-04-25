import { useState, React } from 'react'
import {BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom'
import './App.css'
import Topnav from './components/Topnav'

import About from '../src/pages/About'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Profile from '../src/pages/Profile'


function App() {

  return (
    <>
    <Router>
      <Topnav/>
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace={true} />}/>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/Profile' exact element={<Profile/>}/>

      </Routes>
    </Router>
    
    </>
  )
}

export default App
