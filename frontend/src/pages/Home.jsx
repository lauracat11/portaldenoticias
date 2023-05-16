import React, { useState, useContext, useEffect } from "react";
import { contextNews } from "../context/contextNews";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Modal from "../components/Modal";
function Home() {
  const { news, setnews, API_KEY } = useContext(contextNews);
  const [ImpNews, setImpNews] = useState([]);
  const [SecNews, setSecNews] = useState([]);
  const [VisibilidadModal, setVisibilidadModal] = useState(false);
  const [newTitle, setnewTitle] = useState("");
  const [newImage, setnewImage] = useState("");
  const [newAuthor, setnewAuthor] = useState("");

  const setAttributes = (title, urlImage, author) => {
    setnewTitle(title);
    setnewAuthor(author);
    if (urlImage == null) {
      setnewImage(
        "https://d3t4nwcgmfrp9x.cloudfront.net/upload/maneras-mantener-tu-anonimato-online.jpg"
      );
    } else {
      setnewImage(urlImage);
    }
  };

  async function SetNews() {
    const noticia = news;
    return noticia;
  }

  useEffect(() => {
    SetNews().then((data) => {
      const Arr1 = [];
      const Arr2 = [];

      data.forEach((element, key) => {
          Arr1.push(element);
      });
      setImpNews(Arr1);
      setSecNews(Arr2);
    });
  }, [news]);
 
  const victorString = (stringDesc) =>
  {
    var newStr = ""
    var i = 0
    stringDesc = stringDesc.split("")
    while(i<stringDesc.length)
    {
      var j=i-4
      
      if(stringDesc[i] == "<")
      { 
        while(j<stringDesc.length)
        {
          
          if(stringDesc[j] == ">")
          {

            j = stringDesc.length
            
          }
          i = i+1
          j = j+1
        }
      }
      newStr = newStr + stringDesc[i]
      i = i+1
    }
    return newStr
  }

  return (
    <>
      <div
        className="overflow-full"
      >
        <div
          className="mx-5"
        >
          <h2
            className="font-bold pb-10 pt-3 text-center"
            style={{ fontSize: "1.5vw" }}
          >
            Noticias Principales
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 xl:grid-cols-4 ">
            {ImpNews?.map((Noticia, key) => (
              <div key={key} className="mb-7">
                <div className="mb-6 lg:mb-0">
                  <div className="relative block bg-white rounded-lg shadow-lg">
                    <div className="flex">
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        <div >
                          <img style={{height:"25vh"}}
                            src={Noticia.urlToImage == null ? "https://media.npr.org/assets/img/2022/08/25/trh_incognito_artwork_wide-98bd003daa0a817e661cb600cbdb44b26b0c718c-s1100-c50.jpg" : Noticia.urlToImage}
                            className="w-full"
                          />
                        </div>
                        <p>
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                            style={{backgroundColor:"(251, 251, 251, 0.15)"}}
                          ></div>
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="font-bold text-ls mb-7" style={{height:"8vh"}}>{Noticia.title}</h5>
                      <p className="text-gray-500 mb-4">
                        <small>
                          Publicado en : <u className="text-gray-900">{Noticia.publishedAt}</u> <br></br>
                
                          Escrito por : <u className="text-gray-900">{Noticia.author == null ? "Anónimo" : Noticia.author}</u> <br></br>
                            
                          Fuente : <u className="text-gray-900">{Noticia.source.name}</u>
                        </small>
                      </p>
                      <p className="mb-4 pb-2 overflow-hidden" style={{height:"10vh"}}>
                        {Noticia.description == null ? "Esta noticia no contiene descripción" : victorString(Noticia.description)}
                      </p>
                      <Link
                        to={Noticia.url}
                        target="_blank"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        class="inline-block px-6 py-2.5 bg-[#F25151] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#9b3333] hover:shadow-lg focus:bg-[#9b3333] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e96464] active:shadow-lg transition duration-150 ease-in-out"
                      >
                        LEER MÁS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        VisibilidadModal={VisibilidadModal}
        setVisibilidadModal={setVisibilidadModal}
        title="Rol de los campeones"
      >
        {/* <div style={{display: "grid", gridTemplateColumns:"repeat(2,1fr)"}}> */}
        <img src={newImage} className="w-full" alt="Louvre" />
        <div className="mt-4 flex flex-col gap-4 relative">{newTitle}</div>
        <p>{newAuthor}</p>
        {/* </div> */}
      </Modal>
    </>
  );
}

export default Home;

// onClick={()=>{
//   setAttributes(SecNoticia.title,SecNoticia.urlToImage,SecNoticia.author)
//   setVisibilidadModal(true)
//   }}
