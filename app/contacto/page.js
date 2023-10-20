/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function page() {
  return (
    <div className=''>

      <div className='  mt-28 mb-20'>
        <h1 className='text-center text-terciary font-black text-5xl mb-10'>¿Tienes alguna consulta?</h1>

        <div className=' mx-32  '>
          <div className=' flex justify-center items-center'>
            
            <div className='flex flex-col '>
              <div className=''>
                <h3 className='text-white mb-2'>Escribenos a nuestro Whatsapp</h3>
                <div className='flex'>
                  <img className=" w-5 mr-2" src='/img/whatsapp.svg' alt="WhatsApp logo" />
                  <p className='text-white'> +57 317 550 5934</p>
                </div>  
              </div>

              <div className='mt-5'>
                <h3 className='text-white mb-2'>O envianos un correo</h3>
                <div className='flex'>
                  <img className=" w-5 mr-2" src='/img/email.svg' alt="Email image" />
                  <p className='text-white'> industriasfranky15@gmail.com</p>
                </div>  
              </div>

              <div className='mt-5'>
                <h3 className='text-white mb-2'>También puedes visitarnos en cualquier momento</h3>
                <div className='flex'>
                  <img className=" w-5 mr-2" src='/img/location.svg' alt="Location image" />
                  <p className='text-white'>Calle 11b # 11-56 <br /> Cali - Colombia </p>
                </div>  
              </div>
            </div>
            <img className=" w-96 m-10" src='/img/contact.png' alt="contact picture" />
            
          </div>
        </div>
      </div>

    </div>
  )
}
