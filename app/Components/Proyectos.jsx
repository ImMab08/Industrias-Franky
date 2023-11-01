/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Proyectos() {
  return (
    <div className='my-20'>
      <h1 className='text-white text-center font-bold text-3xl'> Algunos de nuestros proyectos</h1>
      <div className=' flex items-center justify-between'>
        <div className='transform transition-transform duration-300 ease-in-out hover:scale-110 mt-20 ml-20'>
          <img className=' ' src="img/smartmockups_lofyadms-removebg-preview.png" alt="" /> 
          <h1 className='text-terciary font-bold text-2xl relative left-[250px] bottom-0'>TIENDAS ONLINE</h1>
        </div>
        <div className='transform transition-transform duration-300 ease-in-out hover:scale-110 mt-20 mr-20'>
          <img className='  w-[370px]' src="img/smartmockups_log2vjaz-removebg-preview.png" alt="" />
          <h1 className='text-terciary font-bold text-2xl  '>INSTITUTOS VIRTUALES</h1>
        </div>
      </div>
    </div>
  )
}
