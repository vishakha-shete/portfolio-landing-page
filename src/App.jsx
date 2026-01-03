import React from 'react'
import Navbar from './Components/navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/about.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0f172a]">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
