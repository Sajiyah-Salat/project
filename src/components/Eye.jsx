import React, { useState, useEffect } from 'react';
import '../App.css';
import EyeBg from '../assets/eye-image.jpg';

function Eye() {

    const [cursorPos , setCursorPos] = useState ({x:0 , y:0})

    useEffect(() => {
      const handleMouseMove = (e) =>{
      const { clientX : mouseX , clientY : mouseY} = e;

      setCursorPos({x:mouseX , y : mouseY})
      }
    window.addEventListener('mousemove' , handleMouseMove)
      return () => {
        
        window.removeEventListener('mousemove' , handleMouseMove)
      }
    }, [])
    


  return (
   <>
    <h1 className='watch'>We are watching You ! </h1>
    <div className="eye-content">
      {/* Background Image */}
      <div className="image">
        <img src={EyeBg} alt="Eye Background" />
      </div>

      {/* Left Eye */}
      <div className="eye left">
        <div className="eye-white">
          <div
            className="eye-black"
            style={{
              transform: `translate(${cursorPos.x / 50 - 20}px, ${cursorPos.y / 50 - 100}px)`,
            }}
          >
            <div className="cursor-dot">
              <p>PLAY</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Eye */}
      <div className="eye right">
        <div className="eye-white">
          <div
            className="eye-black"
            style={{
              transform: `translate(${cursorPos.x / 50 - 20}px, ${cursorPos.y / 50 - 100}px)`,
            }}
          >
            <div className="cursor-dot">
              <p>PLAY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default Eye;
