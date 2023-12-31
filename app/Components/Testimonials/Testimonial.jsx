'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../Utils/motionTransitions'
import TestimonialSlider from './Testimonial-Slider/TestimonialSlider'

export default function Testimonial() {
  return (
    <div className=' '>
      <div className=' flex flex-col justify-center py-10'>
        <motion.h1
          variants = {fadeIn('up', 0.5)} 
          initial = 'hidden'
          animate = 'show'
          exit = 'hidden'
          className = ' text-white text-3xl md:text-4xl text-center md:my-10 font-bold'
        >
          Algunos comentarios <br /><span className='text-terciary'>de nuestros clientes.</span>
          <motion.div
            variants = {fadeIn('up', 0.5)} 
            initial = 'hidden'
            animate = 'show'
            exit = 'hidden'
            className=''
          >
            <TestimonialSlider />
          </motion.div>
        </motion.h1>
      </div>
      
    </div>
  )
}
