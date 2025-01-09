import React from 'react'
import '../App.css'

function Hero() {
  return (
   <>
    <div className='hero-content'>
    <h1>
    WE CREATE <br />
    <span className="eye-opening-container"> <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="Eye-Opening" />
      <span className="eye-opening">EYE-OPENING</span> 
     
    </span>
    <br /> 
    PRESENTATION
  </h1>



     
      <div className="footer">
        <ul>
            <p>For Public and private companies</p>
            <p>For the first pitch to IPO</p>
            <button>START THE PROJECT</button>

        </ul>
      </div>
    </div>


    <div className="marquee">
       <div className="marquee-content">
       <div className="marquee-items">
        We are Ochi  
        </div>

        <div className="marquee-items">
        We are Ochi  
        </div>
        <div className="marquee-items">
        We are Ochi  
        </div>
        <div className="marquee-items">
        We are Ochi  
        </div>
        <div className="marquee-items">
        We are Ochi  
        </div>
        <div className="marquee-items">
        We are Ochi  
        </div>
       </div>
    </div>
   </>
  )
}

export default Hero
