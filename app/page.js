/* eslint-disable @next/next/no-page-custom-font */
import Section from './Components/Section'
import Carousel from './Components/Carousel'
import Now from './Components/Now'
import Testimonial from './Components/Testimonials/Testimonial'
import Form from './Components/Form'
import Introduction from './Components/Introduction'
import Proyectos from './Components/Proyectos'

export default function Home() {
  return (
    <>
      <div id='home' className=''> 
        <Section />
      </div>

      <div>
        <Introduction />
      </div>
      
      <div>
        <Proyectos />
      </div>

      <div>
        <Now />
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