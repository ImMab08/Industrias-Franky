import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Industrias Franky',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} body`} >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body> 
    </html>
  )
}
