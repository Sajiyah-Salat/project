import React from 'react'

function Footer() {
  return (
    <div>
      <div className="Footer" >
     

            <nav>
                <ul className="foot">
                    <li >Service</li>
                    <li >Our work</li>
                    <li >About</li>
                    <li >Insight</li>
                    <li>Contact Us</li>
                </ul>
            </nav>

            <div className="socials mt-4">
                <ul className=" space-x-6">
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

            <div className="logo">
                <h1 className="text-4xl font-bold p-4">ochi</h1>
                <hr className="border-gray-400" />
            </div>

            <footer>© ochi design 2025. Legal Terms
            Website by Obys</footer>
        </div>
    </div>
  )
}

export default Footer
