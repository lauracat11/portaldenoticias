import React, { useState, useContext, useEffect } from "react";
import {contextNews} from "../context/contextNews"
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes,Navigate, Link} from 'react-router-dom'
function Home() {
  const {news, setnews,API_KEY} = useContext(contextNews)
  const [ImpNews, setImpNews] = useState([])
  const [SecNews, setSecNews] = useState([])

  async function SetNews()
  {
    const noticia = news
    return noticia
  }

  useEffect(()=> {
    SetNews().then((data)=>
    {
      const Arr1 = []
      const Arr2 = []

      data.forEach((element, key) => {
      if(key <4)
      {
        Arr1.push(element);
      }else
      {
        Arr2.push(element);
      }
    });
    setImpNews(Arr1)
    setSecNews(Arr2)
    console.log(SecNews);
  }) 
  }, [news])
  
  
  return (
  <>
    <div style={{display: "grid", gridTemplateColumns:"repeat(2,1fr)"}} className="overflow-hidden h-screen"> 

      <div className="border-r-4 mt-2 overflow-hidden border-[#121212]" style={{width: "74vw"}}>
      <h2 className="font-bold mb-6 text-center" style={{fontSize: "1.5vw"}}>Noticias Principales</h2>
        {ImpNews?.map((Noticia,key)=>(
           <div key={key} className="">
            <div className="flex flex-wrap mb-4"  style={{width: "80vw"}} >
            <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-12">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src={Noticia.urlToImage == null ?
                'https://d3t4nwcgmfrp9x.cloudfront.net/upload/maneras-mantener-tu-anonimato-online.jpg'
                :
                Noticia.urlToImage}
                className="w-full" alt="Louvre" />
                <Link to="">
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                </Link>
              </div>
            </div>
  
            <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
             <h5 className="text-lg font-bold mb-1">{Noticia.title}</h5>
             <p className="text-gray-500 mb-3">
               <small>Published <u>{Noticia.publishedAt}</u> by <br></br>
                 <p className="text-gray-900">{Noticia.author == null ?
                 'Anonymous'
                 :
                 Noticia.author}</p></small>
             </p>
             <p className="text-gray-500" style={{fontSize: "0.8vw"}}>
               {Noticia.description}
             </p>
           </div>
         </div>  
       </div>
        ))}
      </div>



      <div className="mt-2 overflow-y-scroll">
        <h2 className="font-bold text-center" style={{fontSize: "1.5vw"}}> Últimos Articulos</h2>
        {
          SecNews?.map((SecNoticia,key)=>(
            <div key={key} className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-7 my-6" style={{backgroundPosition:"50%"}}>
              <img src={SecNoticia.urlToImage == null ?
                'https://d3t4nwcgmfrp9x.cloudfront.net/upload/maneras-mantener-tu-anonimato-online.jpg'
                :
                SecNoticia.urlToImage}
                />
                <Link to="">
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                </Link>
                <div className=" top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-[#F25151]">
                  <div className="flex justify-start items-end h-full">
                    <div className="text-white m-6">
                      <h5 className="font-bold mb-3">{SecNoticia.title}</h5>
                      
                    </div>
                  </div>
                </div>
            </div>
          ))
        }
      
      </div>
    </div>

    {/* 
    <div key={i} className="">   border-r-4
          <div className="flex flex-wrap mb-4"  style={{width: "85vw"}} >
          <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-12">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
              data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img src={Noticia.urlToImage == null ?
              'https://d3t4nwcgmfrp9x.cloudfront.net/upload/maneras-mantener-tu-anonimato-online.jpg'
              :
              Noticia.urlToImage}
              className="w-full" alt="Louvre" />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
            <h5 className="text-lg font-bold mb-1">{Noticia.title}</h5>
            <p className="text-gray-500 mb-3">
              <small>Published <u>{Noticia.publishedAt}</u> by <br></br>
                <a href="" className="text-gray-900">{Noticia.author == null ?
                'Anonymous'
                :
                Noticia.author}</a></small>
            </p>
            <p className="text-gray-500" style={{fontSize: "0.8vw"}}>
              {Noticia.description}
            </p>
          </div>
        </div>
        
        
      </div>
       */}
  </> )
}

export default Home

