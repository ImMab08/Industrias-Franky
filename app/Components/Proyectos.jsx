/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Proyectos() {
  return (
    <div className='h-screen md:mt-32'>
      <h1 className='text-white text-center font-bold text-2xl md:text-3xl'> Algunos de nuestros proyectos</h1>
      <div className=' flex items-center flex-col md:flex-row md:justify-between'>
        <div className='transform transition-transform duration-300 ease-in-out hover:scale-110 mt-10 md:ml-20'>
          <img className=' w-[300px] md:w-auto ' src="img/smartmockups_lofyadms-removebg-preview.png" alt="" /> 
          <h1 className='text-terciary font-bold md:text-2xl  '>TIENDAS ONLINE</h1>
        </div>
        <div className='transform transition-transform duration-300 ease-in-out hover:scale-110 mt-10 md:mr-20'>
          <img className=' w-[300px]  md:w-[370px] ' src="img/smartmockups_log2vjaz-removebg-preview.png" alt="" />
          <h1 className='text-terciary font-bold md:text-2xl  '>INSTITUTOS VIRTUALES</h1>
        </div>
      </div>
    </div>
  )
}
