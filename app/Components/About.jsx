/* eslint-disable @next/next/no-img-element */
import React from 'react';

function About() {
  return (
    <section className="">
      <div className="py-2 px-4 mx-auto  lg:py-16">
        <div className=" flex bg-black border border-white rounded-lg p-8 md:p-12 mb-8">
          <div className=''>
            <a href="#" className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-primary text-terciary mb-2">
              <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
              </svg>
              Creamos
            </a>
            <h1 className="text-white text-2xl lg:text-5xl font-extrabold mb-2">Páginas web y tiendas en linea.</h1>
            <p className=" text-base lg:text-xl font-normal text-gray-400 my-6">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
            <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-terciary focus:ring-4">
              Conoce más
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
          <img className=" hidden lg:flex lg:w-1/2" src='img/bg-ecommerce.png' alt="ecommerce picture" />  
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black border border-white rounded-lg p-8 md:p-12">
            <a href="#" className=" text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-primary text-terciary mb-2">
              <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"/>
              </svg>
              Diseñamos
            </a>
            <h2 className="text-white text-2xl lg:text-3xl font-extrabold mb-2">Landing page y blogs.</h2>
            <p className=" text-base lg:text-lg font-normal text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
            <a href="#" className="text-terciary hover:underline font-medium text-base lg:text-lg inline-flex items-center">Conoce más
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a>
          </div>
          <div className="bg-black border border-white  rounded-lg p-8 md:p-12">
            <a href="#" className=" text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-primary text-terciary mb-2">
              <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"/>
              </svg>
              Programamos
            </a>
            <h2 className="text-white text-2xl lg:text-3xl font-extrabold mb-2">Software para tus necesidades.</h2>
            <p className=" text-base lg:text-lg font-normal text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
            <a href="#" className="text-terciary hover:underline font-medium text-base lg:text-lg inline-flex items-center">Conoce más
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;