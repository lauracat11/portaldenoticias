import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';
export const contextNews = createContext();

export function NewsContextProvider({children}) {
    const API_KEY = '9c5e5bb69a724318b37911cd10c55df2'
    const urlNews= `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`
    const [news, setnews] = useState([])
    useEffect(()=>{
        axios.get(urlNews).then((result) => setnews(result.data.articles))
    },[])


    return (
        <contextNews.Provider value={{news,setnews,API_KEY}}>
            {children}
        </contextNews.Provider>
    )
}

//export default contextNews