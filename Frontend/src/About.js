import React from 'react'
import Foodcycle from './images/Foodcycle.png'
const About = () => {
  return (
    <div className='aboutUs' id='About Us'>
        <img className='cycle' src={Foodcycle}></img>
        <div className='description'>
            <h2 className='names'>About Us</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis incidunt illum tempora voluptatibus? Tempora itaque tenetur odio nihil umquam temporibus  repudiandae alias rerum perferendis corrupti enim doloremque, vero voluptatum dicta. Nostrum necessitatibus ratione tempora quisquam, incidunt iusto repellat quasi ut adipisci, magnam temporibus ipsum ea voluptatem quis nisi eius, natus recusandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eaque minima!</p>

        </div>
    </div>
  );
}

export default About