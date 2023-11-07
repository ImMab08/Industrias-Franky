/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'

function LandingSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateImageTransform = () => {
    const image1Transform = `translateX(${-scrollY / 2}px)`;
    const image2Transform = `translateX(${scrollY / 2}px)`;
    return [image1Transform, image2Transform];
  };

  const [image1Transform, image2Transform] = calculateImageTransform();

  return (
    <section className="text-white h-screen md:mt-10 text-center relative flex items-center justify-center">

      <div className=" ">
          <h1 className="text-3xl lg:text-5xl font-normal">
            Si puedes imaginarlo,
          </h1>
          <h1 className=" text-4xl lg:text-5xl font-extrabold">
            podemos <span className="text-terciary relative z-10">programarlo.</span>
          </h1>
          <h1 className=" text-base lg:text-lg text-terciary pt-12 md:pt-20 font-medium ">¡Qué esperas para entrar al mundo digital!</h1>
          <img className=" w-10 md:mt-5 mx-auto rounded-full" src="/img/arrow-down-section.svg" alt="Imagen" />
      </div>

      <div className="absolute top-0 bottom-0 h-full w-full z-0 flex flex-row items-center justify-between">
        <div className="transition-transform duration-300 ease-in-out" style={{ transform: image1Transform }}>
          <img className=" hidden md:flex sm:w-60 2xl:w-72 image-transition" src="/img/fondo-img1.png" alt="Imagen" />
        </div>
        <div className="transition-transform duration-300 ease-in-out" style={{ transform: image2Transform }}>
          <img className=" hidden md:flex sm:w-72 2xl:w-80  image-transition" src="/img/fondo-img2.png" alt="Imagen" />
        </div>
      </div>

    </section>
  );
}

export default LandingSection;