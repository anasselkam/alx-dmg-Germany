import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Brand from './components/brand/Brand'
import Courses from './components/courses/Courses'
import NumberCounter from './components/numberCounter/NumberCounter'
import About from './components/about/About'
import Pricing from './components/pricing/Pricing'



const App = () => {
  return (
   <main className='overflow-x-hidden font-primary text-white bg-[#242424]'>
    <Navbar />
    <Hero />
    <Brand />
    <Courses />
    <NumberCounter />
    <About />
    <Pricing />
    
   </main>
  )
}

export default App