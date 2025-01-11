import React from 'react'

function Featured() {
    return (
        <div className='Featured'>
            <h1>Featured projects</h1>
            <hr />



            <div className="container">
                <div className="left">
                    <li>CARDBOARD SPACESHIP</li>
                    <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                   <div className="buttons">
                   <button className="feat-btn">BRANDED TEMPLATE</button>
                    <button className="feat-btn">SALES DECK</button>
                    <button className="feat-btn">SOCIAL TEMPLATES</button>
                   </div>

                </div>

                <div className="right">
                    <li>AH2 & MATT HORN            </li>
                    <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
                   <div className="buttons">
                   <button className="feat-btn">PITCH DESK</button>
                   </div>

                </div>


            </div>

            <div className="container">
                <div className="left">
                    <li>
                    Fyde</li>
                    <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    <div className="buttons">
                    <button className="feat-btn">AUDIT</button>
                    <button className="feat-btn">COPYWRITING</button>
                    <button className="feat-btn">SALES DESK</button>
                    <button className="feat-btn">SLIDES DESIGN</button>
                    </div>

                    
                </div>

                <div className="right">
                    <li>Vise
                    </li>
                    <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    <button className="feat-btn">AGENCY</button>
                    <button className="feat-btn">COMPANY PRESENTATION</button>


                </div>


            </div>

            <div className="container">
                <div className="left">
                    <li>Trawa</li>
                    <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                    <div className="buttons">
                    <button className="feat-btn">BRAND IDENTITY</button>
                    <button className="feat-btn">DESIGN RESEARCH</button>
                    <button className="feat-btn">INVESTOR DECK</button>
                    </div>

                </div>

                <div className="right">
                    <li>
                    Premium Blend            </li>
                    <img src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                  <div className="buttons">
                  <button className="feat-btn">BRANDED TEMPLATE</button>

                  </div>
                </div>


            </div>

        
            
        </div>
    )
}

export default Featured
