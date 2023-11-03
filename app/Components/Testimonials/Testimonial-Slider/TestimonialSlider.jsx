/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Pagination from 'swiper/react'
import { Swiper, SwiperSlide} from 'swiper/react'
import { TestimonialsData } from './Testimonials-data'

import '/app/globals.css';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function TestimonialSlider() {
  return (
    <div>
        <Swiper
            breakpoints = {{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                }
            }}
            freeMode = {true}
            pagination = {{
                clickable: true
            }}
            modules = {{Pagination}}
            className='md:h-max-screen w-[270px] md:w-[600px]'
        >
            {TestimonialsData.map(({id, name, testimonial, image}) => (
                <SwiperSlide className='text-xl' key = {id}>
                    <img src={`img/${image}`} alt={name} width='70' height='70' className='mx-auto mt-10 rounded-full' />
                    <h4 className='text-center mt-5 text-xl md:text-2xl text-white'>{name}</h4>
                    <div className='mt-5 text-center text-base md:text-xl text-white'>{testimonial}</div>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}