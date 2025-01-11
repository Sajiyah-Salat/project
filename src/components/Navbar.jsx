import React, { useRef, useState } from 'react';
import "../App.css"
import { gsap } from 'gsap';
function Navbar() {

const [isVisible , setIsVisible ] = useState(false);
const hamburger = useRef(null)
const handleClick = () =>{
    setIsVisible(!isVisible)

    hamburger.current.classList.toggle('open');
}

const transformValue = isVisible ? "0px" : '-1000px';

gsap.to('.main' , {
    duration : 0.3 ,
    transform  : `translateY(${transformValue})`
})
    return (
<>
<div className="main" >
            <div className="logo">
                <h1 className="text-4xl font-bold p-4">ochi</h1>
                <hr className="border-gray-400" />
            </div>

            <nav>
                <ul className="navbar">
                    <li >Service</li>
                    <li >Our work</li>
                    <li >About</li>
                    <li >Insight</li>
                    <li>Contact Us</li>
                </ul>
            </nav>

            <div className="socials mt-4">
                <ul className="flex space-x-6">
                    <li >LinkedIn</li>
                    <li >Github</li>
                    <li >Discord</li>
                </ul>
            </div>

            <div className="adress mt-4">
                <ul>
                    <li>202-1965 W 4th Ave <br />
                        Vancouver, Canada
                    </li>
                    <li>30 Chukarina St <br />
                        Lviv, Ukraine
                    </li>
                </ul>
            </div>

            <div className="email mt-4">
                <ul>
                    <li>hello@ochi.design</li>
                </ul>
            </div>
        </div>

  
<div className="flex">
<div className="logos">
                <h1 >ochi</h1>
            </div>
      <div className="nav">
            <nav>
                <ul className="uls">
                    <li >Service</li>
                    <li >Our work</li>
                    <li >About</li>
                    <li >Insight</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <div className="hamburger" ref={hamburger} onClick={handleClick}>
                <span></span>
                <span></span>
            </div>
        </div>
</div>
</>
    )
}

export default Navbar;
