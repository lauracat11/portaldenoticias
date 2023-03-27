import React,{useRef} from 'react'
import {BrowserRouter as Router, Route, Routes,Navigate, Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
function Topnav() {
    const pages = 
    [
        {
            name: "Inicio",
            link : "/home"
        },
        {
            name: "Sobre Nosotros",
            link : "/about"
        },
        {
            name: "Iniciar Sesión",
            link : "/login"
        }
    ]
    const navRef = useRef()
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            {pages?.map((page,i)=>
            (
                <Link  className='link' key={i} to={page.link}>{page.name}</Link>
            ))}
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
  )
}

export default Topnav