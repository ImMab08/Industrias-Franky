/* eslint-disable @next/next/no-img-element */
import React from 'react'
import '../globals.css';

export default function Introduction() {
  return (
    <div>
      <div class="custom-shape-divider-top-1698810401 bg-[#0c0c0c] h-[500px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>

        <div className=' absolute left-6 md:left-28 mt-10 text-left w-[270px] md:w-[500px]'>
          <h1 className='text-white font-bold text-lg md:text-2xl'><span className='text-terciary'>Somos expertos en</span> desarrollo y posicionamiento online.</h1>
          <p className='text-white font-medium text-xs md:text-sm mt-4'>Con más de 4 años de experiencia y con un equipo altamente capacitado logramos llevar tu idea, negocio, empresa u HV al mundo digital. Páginas 100% personalizadas y a tu medida.</p>
          <img className='w-[150px] md:w-[250px] absolute bottom-[20px] left-[280px] md:left-[550px]' src="img/Website setup-pana.png" alt="" />
        </div>

        <div className=' absolute right-6 md:right-28 mt-64 text-right w-[300px] md:w-[500px]'>
          <h1 className='text-white font-bold text-lg md:text-2xl'> De la mano con nuestros <span className='text-terciary'>clientes</span>.</h1>
          <p className='text-white font-medium text-xs md:text-sm mt-4'> Destacamos por nuestra dedación, compromiso y empeño para cada proyecto que iniciamos. De esta forma trabajamos de la mano de nuestros clientes para pulir el más minimo detalle.</p>
          <img className='w-[120px] md:w-[180px] absolute top-0 right-[300px] md:right-[550px]' src="img/Collab-rafiki.png" alt="" />
        </div>
        
          <svg className='custom-shape-divider-bottom-1698814463' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
          </svg>
      </div>
    </div>
  );
}
