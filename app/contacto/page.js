/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function page() {
  return (
    <div className=' flex justify-center '>
      <img className=" absolute w-[150px] left-16 top-[90px] rotate-45 floating-animation" src="/img/Astronaut-pana.png" alt="Imagen" />
      <img className=" absolute w-[200px] right-0 bottom-0 floating-animation" src="/img/Astronaut-rafiki.png" alt="Imagen" />

      <div className='w-contact  mt-28 mb-20'>
        <h1 className='text-center mt-20 text-white font-black text-3xl mb-5'>¿Tienes alguna <br/> consulta?</h1>
        <div className=' flex justify-center items-center text-white'>

          <div className='flex flex-col items-center '>

            <h3 className=' mb-2 font-bold text-lg'>Escribenos a nuestro Whatsapp</h3>
            <div className='flex'>
              <img className=" w-5 mr-2" src='/img/whatsapp.svg' alt="WhatsApp logo" />
              <p className=''> +57 317 550 5934</p>
            </div>

            <h3 className='mt-5 font-bold text-lg'>Envianos un correo</h3>
            <div className='flex'>
              <img className=" w-5 mr-2" src='/img/email.svg' alt="Email image" />
              <p className=''> industriasfranky15@gmail.com</p>
            </div>  

            <h3 className='mt-5 font-bold text-lg'>También puedes visitarnos en cualquier momento</h3>
            <div className='flex'>
              <img className=" w-5 mr-2" src='/img/location.svg' alt="Location image" />
              <p className=''>Calle 11b # 11-56 <br /> Cali - Colombia </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
