/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from "framer-motion"

export default function Page() {

  return (
    <div className=''>
      <div className=' mt-32 mx-10'>
        <div className=' lg:flex '>
          <div>
            <h1 className=' text-white font-bold text-4xl lg:text-6xl'>Llevamos tu empresa, negocio o tus servicios al <span className='text-terciary'>mundo digital.</span></h1>
            <p className='text-white text-ms py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <h2 className='text-white font-bold text-2xl'> Conoce lo que tenemos para ofrecerte.</h2>
              <img className=" absolute z-10 left-[170px] bottom-4 lg:bottom-[87px] lg:left-[510px] w-3 lg:my-3" src='img/down-arrow.png' alt="down-arrow picture" />
          </div>
            <img className=" mt-5 lg:mt-0 ml-12 w-[300px] lg:w-[35%]" src='img/Programmer-amico.png' alt="services picture" />
        </div>
      </div>

    </div>
  )
}
