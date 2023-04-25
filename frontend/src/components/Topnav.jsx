import React,{useRef} from 'react'
import {BrowserRouter as Router, Route, Routes,Navigate, Link} from 'react-router-dom'
import {FaBars, FaTimes,FaRegNewspaper} from 'react-icons/fa'
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

    const categories = [
        {category: "Últimas Noticias"},
        {category: "Negocios"},
        {category: "Deportes"},
        {category: "Politica"},
        {category: "Salud"},
        {category: "Arte"},
        {category: "Tecnología"},
        {category: "Mundo"}

    ]
    const navRef = useRef()
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <>
    <header>
        <h3><FaRegNewspaper size={35}/></h3>
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
    <h1 className='titulo text-center mb-2' style={{fontSize: "3.5vw", height: "8vh"}}>Portal De Noticias</h1>

    {/* CATEGORÍAS */}
    <div className='flex row py-2 bg-[#F25151] text-center text-[#eee]' style={{fontSize:"1.2vw", height: "6vh"}}>
    {
        categories?.map((categoria,i)=>(
            <div key={i} className="vl" style={{width: "10vw"}}>
                {categoria.category}
            </div>
        ))
    }
    </div>
    {/* ////////// */}
    </>
  )
}

export default Topnav