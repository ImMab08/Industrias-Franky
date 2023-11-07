/* eslint-disable @next/next/no-img-element */
import React from 'react'
import '../globals.css';

export default function Introduction() {
  return (
    <div id='about' className=' h-screen'>
      <div class=" bg-[#0c0c0c]">
        <div className='custom-shape-divider-top-1698810401'>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
          </svg>
        </div>
      
        <div className=' flex mt-10 text-left items-center w-[350px] md:w-[900px] ml-10 md:ml-[150px]'>
          <div className=' '>
            <h1 className='text-white font-bold text-sm md:text-2xl'><span className='text-terciary'>Somos expertos en</span> desarrollo y posicionamiento online.</h1>
            <p className='text-white font-medium text-xs md:text-sm mt-4'>Con más de 4 años de experiencia y con un equipo altamente capacitado logramos llevar tu idea, negocio, empresa u HV al mundo digital. Páginas 100% personalizadas y a tu medida.</p>
          </div>
          <div className='mx-2 md:mx-20 w-[550px] md:w-[600px]'>
            <img className=' ' src="img/Website setup-pana.png" alt="" />
          </div>
        </div>

        <div className='flex mt-10 md:mt-20 mb-10 text-right w-[350px] md:w-[900px] ml-10 md:ml-[150px] items-center'>
          <div className=' md:mx-20  md:w-[400px] '>
            <img className='w-[400px]' src="img/Collab-rafiki.png" alt="" />
          </div>
          <div className=''>
            <h1 className='text-white font-bold text-sm md:text-2xl'> De la mano con nuestros <span className='text-terciary'>clientes</span>.</h1>
            <p className='text-white font-medium text-xs md:text-sm mt-4'> Destacamos por nuestra dedación, compromiso y empeño para cada proyecto que iniciamos. De esta forma trabajamos de la mano de nuestros clientes para pulir el más minimo detalle.</p>
          </div>
        </div>

        <div className='custom-shape-divider-bottom-1698814463'>
          <svg className='' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
