import React from 'react'
import { PlanData } from './Plan-data'

export default function Plan() {
  return (
    <div className=" mt-10 max-h-screen rounded-xl">
      <h1 className=" pt-5 pb-10 text-center text-terciary font-extrabold text-4xl">NUESTROS PLANES</h1>

      <div className=" flex grid-rows-3 gap-10 justify-center">
        {PlanData.map(({id, title, description, price}) => (
          <>
            <div className=" bg-[#0c0c0c] px-5 w-[350px] h-[500px] rounded-3xl border-b-4 border-t-4 border-terciary" key={id}>
              <h2 className="text-white text-left pt-5 pb-2 font-extrabold text-4xl">{title}</h2>
              <p className="text-white font-medium subtitleh2 text-sm my-2">{description}</p>

              <h3 className="text-center font-bold text-white text-xl">INCLUYE</h3>
              <ol className="text-white">
                <li>Diseño y desarollo personalizado.</li>
                <li>Optimización para SEO.</li>
                <li>Integración de comentarios y redes sociales.</li>
                <li>Adaptado para todos los dispositivos.</li>
                <li>Velocidad de carga raápida del sitio.</li>
              </ol>

              <div className="pt-5 ">
                <h3 className="text-white text-center">{price}</h3>
                <p className="text-white text-center">Incliuye dominio y hots</p>
              </div>
            </div>
          </>
        ))}
        
      </div>
    </div>
  )
}
