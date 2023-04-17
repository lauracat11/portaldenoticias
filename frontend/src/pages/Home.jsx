import React, { useState, useContext, useEffect } from "react";
import {contextNews} from '../context/contextNews'
function Home() {
  const {news,setnews,API_KEY} = useContext(contextNews)
  return (
    <div>{news?.map((newItem,i)=>(
      <>
      <div key={i}>
        <p>{newItem.author}</p>
        <img src={newItem.urlToImage} />
        </div> 
      </>     
  ))}</div>
  )
}

export default Home