import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured'

const App = () => {
  return (
    <div className='apps'>
      <Navbar/>
      <Hero/>
      <About/>
      <Eye/>
      <Featured/>
    </div>
  )
}

export default App
