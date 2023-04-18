import React, { useState, useContext, useEffect } from "react";
import {contextNews} from "../context/contextNews"
function Home() {
  const {news,setnews,API_KEY} = useContext(contextNews)
  return (
    <div className="pt-6 border-r-4" style={{width: "76vw"}}>{news?.map((newItem,i)=>(
      <>
      <div key={i} className="">
        <div className="flex flex-wrap mb-4"  style={{width: "85vw"}} >
        <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-12">
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src={newItem.urlToImage == null ?
            'https://d3t4nwcgmfrp9x.cloudfront.net/upload/maneras-mantener-tu-anonimato-online.jpg'
            :
            newItem.urlToImage}
            className="w-full" alt="Louvre" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
            </a>
          </div>
        </div>

        <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
          <h5 className="text-lg font-bold mb-1">{newItem.title}</h5>
          <p className="text-gray-500 mb-3">
            <small>Published <u>{newItem.publishedAt}</u> by <br></br>
              <a href="" className="text-gray-900">{newItem.author == null ?
              'Anonymous'
              :
              newItem.author}</a></small>
          </p>
          <p className="text-gray-500" style={{fontSize: "0.8vw"}}>
            {newItem.description}
          </p>
        </div>
      </div>
        
        
      </div> 
      </>     
  ))}</div>
  )
}

export default Home