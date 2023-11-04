/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Header() {

  const menuBackdropRef = useRef(null);
  const headerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const listItem = document.querySelectorAll("#landing-header li");

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();

        menuBackdropRef.current.style.setProperty("--left", `${left}px`);
        menuBackdropRef.current.style.setProperty("--top", `${top}px`);
        menuBackdropRef.current.style.setProperty("--width", `${width}px`);
        menuBackdropRef.current.style.setProperty("--height", `${height}px`);

        menuBackdropRef.current.style.opacity = "1";
        menuBackdropRef.current.style.visibility = "visible";
      });

      item.addEventListener("mouseleave", () => {
        menuBackdropRef.current.style.opacity = "0";
        menuBackdropRef.current.style.visibility = "hidden";
      });
    });
  }, []);

  useEffect(() => {
    const headerEl = headerRef.current;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          const color = entry.target.getAttribute("data-header-color");
          headerEl.style.color = color;
        }
      });
    }, observerOptions);

    const sectionElements = document.querySelectorAll(".landing-section");
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
    id="landing-header"
    className="bg-black p-6 2xl:p-8 flex items-center fixed top-0 w-full justify-between z-40 text-white"
    ref={headerRef}
  >
    <div className="flex flex-grow basis-0">
      <a href="/">
        <img src="img/logo-industriasfranky-blanco.png" alt="logo-industriasfranky" className="w-36 2xl:w-44" />
      </a>
    </div>

    {/* Ícono de barras para dispositivos móviles */}
    <div className="block md:hidden relative left-[200px]">
      <img onClick={toggleMobileMenu} className={` cursor-pointer w-10 transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} src="img/bars-svgrepo-com.svg" alt="Menu" />
    </div>

    {/* Menú para dispositivos móviles */}
    {isMobileMenuOpen && (
      <nav className="block md:hidden absolute top-16 right-4 bg-black p-4">
        <ul className="flex flex-col text-white">
          <li><a href="/">Inicio</a></li>
          <li><Link href={"servicios"}>Servicios</Link></li>
          <li><a href="/t">Nosotros</a></li>
          <li><Link href={"contacto"}>Contactanos</Link></li>
        </ul>
      </nav>
    )}

    {/* Menú principal */}
    <nav className="hidden md:block sm:hidden ">
      <ul className="flex text-sm 2xl:[&>li>a]:text-xl [&>li>a]:font-bold [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-base [&>li>a]:inline-block [&>li>a]:px-5 [&>li>a]:py-2">
        <li><a href="/">Inicio</a></li>
        <li><Link href={"servicios"}>Servicios</Link></li>
        <li><a href="/#about">Nosotros</a></li>
      </ul>
    </nav>
  
    <nav className="flex flex-grow justify-end basis-0">
      <ul className="flex text-sm 2xl:[&>li>a]:text-xl [&>li>a]:font-bold [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:text-base">
        <li className="hidden md:block sm:hidden"><Link href={"contacto"}>Contactanos</Link></li>
      </ul>
    </nav>

    <div
      id="menu-backdrop"
      className={`
        absolute bg-terciary backdrop-blur-lg rounded
        translate-x-[var(--left)] translate-y-[var(--top)]
        left-0 top-0
        w-[var(--width)] h-[var(--height)]
        transition-all duration-100
        ease-in-out opacity-0 -z-10
      `}
      ref={menuBackdropRef}
    ></div>
  </header>
  );
}

export default Header;