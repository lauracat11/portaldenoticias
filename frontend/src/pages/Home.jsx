import React, { useState, useContext, useEffect } from "react";
import {contextNews} from "../context/contextNews"
function Home() {
  const {news,setnews,API_KEY} = useContext(contextNews)
  return (
    <div className="pt-6">{news?.map((newItem,i)=>(
      <>
      <div key={i} style={{width: "95vw"}}>
        <div class="flex flex-wrap mb-4">
        <div class="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-12">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src={newItem.urlToImage == null ?
            'https://d3t4nwcgmfrp9x.cloudfront.net/upload/maneras-mantener-tu-anonimato-online.jpg'
            :
            newItem.urlToImage}
              class="w-full" alt="Louvre" />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
              style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
            </a>
          </div>
        </div>

        <div class="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
          <h5 class="text-lg font-bold mb-3">{newItem.title}</h5>
          <p class="text-gray-500 mb-6">
            <small>Published <u>{newItem.publishedAt}</u> by <br></br>
              <a href="" class="text-gray-900">{newItem.author == null ?
              'Anonymous'
              :
              newItem.author}</a></small>
          </p>
          <p class="text-gray-500" style={{width: "45vw"}}>
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