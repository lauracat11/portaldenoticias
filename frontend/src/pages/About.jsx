import { useEffect, useState } from 'react';
import React from 'react'
import laura from '../img/laura.png'
import anto from '../img/antopt2.jpg'
import arnau from '../img/Arnau.png'

function About() {

  // const endpoint = "http://127.0.0.1:8000/api";

  
  //   const [users, setUsers] = useState([]);
  
  //   useEffect(() => {
  //     getAllUser();
  //   })
  
  //   async function getAllUser() {
  //     console.log("enviando");
  //     // const response = await axios.get('http://127.0.0.1:8000/api/users');
  //     const response = await fetch(`${endpoint}/users`, {method: 'GET'})
  //     .then((data) => data.json());
  //     console.log(response);
  //     setUsers(response);
  //   }


  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8" >
                <div className="w-full lg:w-5/12 flex flex-col justify-center" style={{ height:"58vh"}}> 
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">¿Quienes Somos?</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Somos un pequeño grupo de estudiantes de Desenvolupamiento de Aplicaciones Web, impulsados por la creatividad y el hambre de aprender cosas nuevas cada día. 
                    <h3 className='text-xl font-semibold'>- ¿Que Ofrecemos?</h3>
                    Los tres coincidimos que no hay cosa mas importante que estar pendiente de todo lo que ocurre a nuestro alrededor, y para ello, queremos crear una  página web que desde un mismo sitio, puedes acceder a todas las últimas noticias del MUNDO, si, como habeis leido, del MUNDO ya sea de Ámercia, Asia, Oceanía, te mostraremos todas las noticias existentes que acorden con la busqueda que tú has realizado.
                    <h3 className='text-xl font-semibold'>- ¿Como trabajamos?</h3>
                    Los tres trabajamos acorde a las necesidades del cliente, queremos ese tipo de empresa que lea las reseñas, que siempre esté intentando acontentar a su público, y que aprendamos de nuestros errores a futuro.
                    </p>
                </div>
                <div className="w-full lg:w-8/12" style={{width: "43vw"}}>
                    <img className="w-full h-full" src="https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center" style={{ height:"43vh"}}>
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Nuestra idea de proyecto </h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Tal y como dice el anterior apartado, la idea base de nuestro proyecto es crear una página web que nos permite leer e informarmos todo lo que esta pasando a nuestro alrededor, o si queremos, alrededor de todo el mundo, con simplemenete, poner una palabra clave, y te saldra un listado de las últimas miles de noticias existentes referente a esa palabra clave</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center overl">
                            <img style={{height: "24vh"}} className="overflow-hidden md:block hidden" src={laura} alt="" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Laura</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img style={{height: "24vh"}} className="overflow-hidden md:block hidden" src={anto} alt="" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Anthony</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img style={{height: "24vh"}} className="overflow-hidden md:block hidden" src={arnau} alt="" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Arnau</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    // <div>About</div>
    // <div>
    //   <h1>Info Usuarios Tabla</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>NOMBRE</th>
    //         <th>APELLIDO</th>
    //         <th>CORREO</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {users.map((user) => (
    //         <tr key={user.id}>
    //           <td>{user.nombre}</td>
    //           <td>{user.apellido}</td>
    //           <td>{user.correo}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  )
}

export default About