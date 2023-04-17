import React,{useRef,useContext,useState} from 'react'
import {BrowserRouter as Router, Route, Routes,Navigate, Link} from 'react-router-dom'
import {FaBars, FaTimes,FaRegNewspaper} from 'react-icons/fa'
import {contextNews} from '../context/contextNews';
import axios from 'axios';

function Topnav() {
    const {news,setnews,API_KEY} = useContext(contextNews)
    const [q, setq] = useState("")
    const searchNew = (event) =>
    {
        event.preventDefault()
        var StringCall = `https://newsapi.org/v2/everything?q=${q}&apiKey=${API_KEY}`
        axios.get(StringCall).then((result) => setnews(result.data.articles))
    }

    const pages = 
    [
        {
            name: "Inicio",
            link : "/home",
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
        {category: "Negocios",searcher: "business"},
        {category: "Deportes",searcher: "sport"},
        {category: "Politica",searcher: "policy"},
        {category: "Salud",searcher: "health"},
        {category: "Arte",searcher: "art"},
        {category: "Tecnología",searcher: "Technology"},
        {category: "Mundo",searcher: "World"}

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
            <div key={i} className="vl cursor-pointer" style={{width: "10vw"}} onClick={(e)=>{
                setq(categoria.searcher)
                searchNew(e)
                }}>
                {categoria.category}
            </div>
        ))
    }
    <div class="">
        <form>
            <div class="px-5">
            <div class="flex space-x-4 h-10">
                <div class="flex rounded-md overflow-hidden">
                <input type="text" class="w-full rounded-md rounded-r-none text-black" placeholder=' Buscar noticia' 
                onChange={
                    (e)=>{e.preventDefault()
                    setq(e.target.value)
                }}/>
                <button class="bg-indigo-600 text-white px-6 text-lg font-semibold rounded-r-md" 
                onClick={(e)=>{
                    searchNew(e)
                }}>Go</button>
                </div>
            </div>
            </div>
        </form>
    </div>
    </div>
    {/* ////////// */}
    </>
  )
}

export default Topnav