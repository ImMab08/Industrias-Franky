/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from "framer-motion"
import Servicios from  '../Components/Servicios'
import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import '../globals.css'

const visible = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.5
  }
};

const moveBackground = keyframes`
  0% {
    background-position: 0px;
  }
  100% {
    background-position: -10000px;
  }
`;

const StyledComponent = styled.div`
  background-image: url("img/track.png");
  position: relative;
  animation: ${moveBackground} 100s linear infinite;
`;

export default function Page() {
  const [rocketImage, setRocketImage] = useState(1); // Estado para controlar la imagen del cohete

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar a la siguiente imagen del cohete cada cierto tiempo (aquí cada 500 milisegundos)
      setRocketImage((prevImage) => (prevImage % 3) + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <motion.div 
      initial='hidden'
      animate='visible'
      exit={{
        opacity: 0,
        transition: {
          duration: 1
        }
      }}
      variants={{
        hidden: {opacity: 0, y: -20},
        visible
      }}
      className=' max-w-screen'>
      <motion.div 
        
        className=' mt-32 md:mx-10'>
        <div className='text-center md:text-left md:flex items-center justify-center'>
          <div className=" flex flex-col md:w-[500px]">
            <h1 className=' text-white font-bold text-3xl lg:text-5xl'>Llevamos tu empresa, negocio o tus servicios al <span className='text-terciary'>mundo digital.</span></h1>
            <div className="mt-10">
              <h2 className='text-white font-bold text-xl md:text-2xl'> Conoce lo que tenemos para ofrecerte.</h2>
              <img className=" mx-auto bottom-4 w-10" src='img/arrow-down-svgrepo-com.svg' alt="down-arrow picture" />
            </div>
          </div>
            <img className=" mt-5 mx-auto md:mx-0 mdfirst-letter::mt-0 md:ml-12 w-[300px] lg:w-[32%]" src='img/Programmer-amico.png' alt="services picture" />
        </div>

        <div className="mt-5">
          <Servicios />
        </div>


      </motion.div>

      <StyledComponent className=" md:max-w-screen flex items-center justify-center shadow-inner">
      <div className="md:flex md:items-center md:content-between ">
        <img
          className=" hidden md:block w-[80px] h-[80px] left-[200px] top-[400px] md:w-[150px] md:h-[150px] relative z-10 md:left-28 md:top-0"
          src={`img/Capa-${rocketImage}.png`} // Utiliza la imagen según el estado actual
          alt="services picture"
        />
        <div className="md:ml-[300px] md:w-[600px]">
          <img src='img/textxd.png' alt="services picture"/>
        </div>
      </div>
    </StyledComponent>
    </motion.div>
  )
}
