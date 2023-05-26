import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';
import React, { useState } from 'react'
import img from '../img/icon-256x256-removebg-preview.png'


function NewsletterContent() {

  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      {modal && (
        <div className=''>
          <div className='flex justify-center relative pt-5 h-[30rem]'>
            <div className='w-1/6 bg-[#2B252E]'>
              <div className='flex justify-center'>
                <img src={img} alt="" />
              </div>
              <div className='text-center text-xl text-white'>Newsletter</div>
            </div>
            <div className=' w-[30rem] space-y-8 border-2 pl-10 pr-10 grid-rows-2'>
              <button className='ml-[26rem]' onClick={toggleModal}>X</button>
              <div className='text-center text-xl'>Suscibete a nuestro newsletter</div>
              <div className='text-justify'>Suscribete a nuestro Newsletter para no merderte nada de lo que pasa en el mundo</div>
              <div className='justify-center flex'>
                <MailchimpSubscribe
                  url='https://gmail.us21.list-manage.com/subscribe/post?u=6d9ddcbc36699fa68694b2345&amp;id=0ac3139667&amp;f_id=00f1b6e1f0'
                  render={(props) => {
                    const { subscribe, status, message } = props || {};
                    return (
                      <NewsletterForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                      />
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
      )}
    </>
  )
}

export default NewsletterContent


// import MailchimpSubscribe from 'react-mailchimp-subscribe';
// import NewsletterForm from './NewsletterForm';

// const NewsletterSubscribe = () => {

//   const MAILCHIMP_URL = 'https://gmail.us21.list-manage.com/subscribe/post?u=6d9ddcbc36699fa68694b2345&amp;id=0ac3139667&amp;f_id=00f1b6e1f0';

//   return (
//     <MailchimpSubscribe
//       url= 'https://gmail.us21.list-manage.com/subscribe/post?u=6d9ddcbc36699fa68694b2345&amp;id=0ac3139667&amp;f_id=00f1b6e1f0'
//       render={ ( props ) => {
//         const { subscribe, status, message } = props || {};
//         return (
//           <NewsletterForm
//             status={ status }
//             message={ message }
//             onValidated={ formData => subscribe( formData ) }
//           />
//         );
//       } }
//     />
//   );
// };

// export default NewsletterSubscribe;
