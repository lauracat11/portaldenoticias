import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {NewsContextProvider} from "../src/context/contextNews"
ReactDOM.createRoot(document.getElementById('root')).render(
 <NewsContextProvider>
    <App />
 </NewsContextProvider>

)
