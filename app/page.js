/* eslint-disable @next/next/no-page-custom-font */
import Section from './Components/Section'
import Carousel from './Components/Carousel'
import About from './Components/About'
import Client from './Components/Client'
import Review from './Components/Review'
import Form from './Components/Form'

export default function Home() {
  return (
    <>
      <div id='home'> 
        <Section />
      </div>

      <div id='about'   >
        <About />
      </div>

      <div>
        <Client />
      </div>

      <div>
        <Carousel />
      </div>

      <div>
        <Review />
      </div>

      <div>
        <Form />
      </div>
      
    </>
  )
}