import React from 'react'
import pic from './images/bur.png'
import circle from './images/pattern 1.png'
import circle1 from './images/pattern 2.png'
const Content = () => {
    return (
        <div>
            <div className='main' id='Home'>
                <div className='detail'>
                    <div className='title'>
                        <h1>Welcome to</h1>
                        <h1 className='head'>Hotel Royal</h1>
                    </div>

                    <div className='para'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi possimus doloribus culpa error praesentium voluptates ea nostrum dolorum? Doloremque, ratione?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quam recusandae aliquid ipsum in magnam. Necessitatibus ipsa suscipit modi laboriosam doloribus ut odio vitae cum.</p>
                        <button className='explore'><a href='#Foods'>Explore Now 🡢</a></button>
                    </div>
                    <div className='circle'></div>
                    
                </div>
                
                <img className='burger' src={pic}></img>
            </div>
           
            <img className='vertical' src={circle}></img>
            <img className='horizontal' src={circle1}></img>
            

        </div>
    );
}

export default Content