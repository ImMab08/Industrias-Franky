/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function page() {
  return (
    <div 
      style={{
        backgroundImage: 'url(img/track.png)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)',
        height: '100vh',
      }}
      className=' flex justify-center items-center md:mt-28 md:mb-20'>
      <img className=" absolute w-[80px] md:w-[150px] left-5 md:left-16 top-[150px] md:top-[40px] rotate-45 floating-animation" src="/img/Astronaut-pana.png" alt="Imagen" />
      <img className=" absolute w-[120px] md:w-[200px] right-0 bottom-32 floating-animation" src="/img/Astronaut-rafiki.png" alt="Imagen" />

      <div className='w-contact '>
        <h1 className='text-center mt-10 md:mt-20 text-white font-black text-2xl md:text-3xl mb-5'>¿Tienes alguna <br/> consulta?</h1>
        <div className=' flex justify-center items-center text-white'>

          <div className='flex flex-col items-center '>

            <h3 className=' mb-2 font-bold text-base md:text-lg'>Escribenos a nuestro Whatsapp</h3>
            <div className='flex'>
              <img className=" w-3 md:w-5 mr-2" src='/img/whatsapp.svg' alt="WhatsApp logo" />
              <p className=' text-sm md:text-base'> +57 317 550 5934</p>
            </div>

            <h3 className='mt-5 font-bold text-base md:text-lg'>Envianos un correo</h3>
            <div className='flex'>
              <img className=" w-3 md:w-5 mr-2" src='/img/email.svg' alt="Email image" />
              <p className=' text-sm md:text-base'> industriasfranky15@gmail.com</p>
            </div>  

            <h3 className='mt-5 font-bold text-base md:text-lg'>Visitanos</h3>
            <div className='flex'>
              <img className=" w-3 md:w-5 mr-2" src='/img/location.svg' alt="Location image" />
              <p className='text-sm md:text-base'>Calle 11b # 11-56 Cali - Colombia </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
