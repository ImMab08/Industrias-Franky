/* eslint-disable @next/next/no-page-custom-font */
import Section from './Components/Section'
import Carousel from './Components/Carousel'
import Client from './Components/Client'
import Testimonial from './Components/Testimonials/Testimonial'
import Form from './Components/Form'
import Introduction from './Components/Introduction'
import Proyectos from './Components/Proyectos'

export default function Home() {
  return (
    <>
      <div id='home'> 
        <Section />
      </div>

      <div>
        <Introduction />
      </div>
      
      <div>
        <Proyectos />
      </div>

      <div>
        <Client />
      </div>

      <div>
        <Carousel />
      </div>

      <div>
        <Testimonial />
      </div>

      <div>
        <Form />
      </div>
      
    </>
  )
}