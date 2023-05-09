import MalchimpSubscribe from 'react-mailchimp-subscribe'
import React from 'react'
// import img from '../'


const Comentarios = () => {
    return (

        <div className='flex justify-center relative pt-5 '>
            <div className='w-2/6 bg-[#2B252E]'>
            <img src="./img/icon-256x256-removebg-preview.png" alt=""/> 
                <div>Newsletter</div>  
            </div>
            <div className='border-2 p-20 grid-rows-2'>
                <div className='text-xl'>Suscibete a nuestro newsletter</div>
                <div className=''>Suscribete a nuestro Newsletter para no merderte nada de lo que pasa en el mundo</div>
                <MalchimpSubscribe
                    url= 'http://eepurl.com/iqFiqo'
                />
            </div>
            
        </div>

    )
}

export default Comentarios
