import React from 'react'
import "../App.css"

function About() {
  return (
    <div className='About-content'>
      <h1>Ochi is a strategic presentation agency for forward-thinking businesses that need to <i>raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</i>

</h1>
<hr />

<div className="flex">
    <div className="about1">
        <p>What you can expect:</p>
    </div>

    <div className="about2">
        <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
        <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
    </div>
</div>

<div className="flex1">
    <div className='left'>
    <h1>Our approach : </h1>
    <button>Read More <i></i></button>
    </div>
    <div className="right">
        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
    </div>

</div>

    </div>
  )
}

export default About
