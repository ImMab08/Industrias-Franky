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
  height: 600px;
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
        
        className=' mt-32 mx-10'>
        <div className=' lg:flex items-center justify-center'>
          <div className=" flex flex-col w-[500px]">
            <h1 className=' text-white font-bold text-xl lg:text-5xl'>Llevamos tu empresa, negocio o tus servicios al <span className='text-terciary'>mundo digital.</span></h1>
            <div className="mt-10">
              <h2 className='text-white font-bold text-2xl'> Conoce lo que tenemos para ofrecerte.</h2>
              <img className=" mx-auto bottom-4 w-10" src='img/arrow-down-svgrepo-com.svg' alt="down-arrow picture" />
            </div>
          </div>
            <img className=" mt-5 lg:mt-0 ml-12 w-[300px] lg:w-[32%]" src='img/Programmer-amico.png' alt="services picture" />
        </div>

        <div className="mt-5">
          <Servicios />
        </div>


      </motion.div>

      <StyledComponent className="max-w-screen flex items-center justify-center shadow-inner">
      <div className="flex items-center content-between ">
        <img
          className="w-[150px] h-[150px] relative z-10 left-28"
          src={`img/Capa-${rocketImage}.png`} // Utiliza la imagen según el estado actual
          alt="services picture"
        />
        <div className="ml-[300px] w-[600px]">
          <img src='img/textxd.png' alt="services picture"/>
        </div>
      </div>
    </StyledComponent>
    </motion.div>
  )
}
