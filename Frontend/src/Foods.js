import React, { useState } from 'react'

import chickenBiriyani from './images/chicken biriyani.png'
import chickenNoodles from './images/chicken noodles.png'
import barbecue from './images/barbecue.png'
import pasta from './images/pasta.png'
import burger from './images/bur.png'
import vegRice from './images/veg rice.png'
import pizza from './images/pizza.png'
import fishFry from './images/fish fry.png'
import chocolate from './images/Chocolate ice.png'
import redJuice from './images/red juice.png'
import noodles from './images/noodles.png'
import cupIce from './images/cup ice.png';

const Foods = () => {


    return (
        <div className='foods' id='Foods'>
            <h2 className='names'> Foods</h2>
            <div className='row1'>

                <div  className='item'>
                    <img src={chickenBiriyani}></img>
                    <h4>Chicken Biriyani </h4>
                    <p>$200 </p>

                </div>

                <div  className='item'>
                    <img src={chickenNoodles}></img>
                    <h4>Chicken Noodles </h4>
                    <p>$180 </p>
                </div>

                <div  className='item'>
                    <img src={barbecue}></img>
                    <h4>Barbecue </h4>
                    <p>$250 </p>
                </div>
                <div  className='item'>
                    <img src={pasta}></img>
                    <h4>Pasta </h4>
                    <p>$150 </p>
                </div>
            </div>
            <div className='row2'>
                <div className='item' >
                    <img src={burger}></img>
                    <h4>Burger </h4>
                    <p>$120 </p>
                </div>
                <div  className='item'>
                    <img src={vegRice}></img>
                    <h4>Veg Rice </h4>
                    <p>$80 </p>
                </div>
                <div  className='item' >
                    <img src={pizza}></img>
                    <h4>pizza </h4>
                    <p>$300 </p>
                </div>
                <div  className='item'>
                    <img src={fishFry}></img>
                    <h4>Fish Fry </h4>
                    <p>$140 </p>
                </div>
            </div>
            <div className='row3'>
                <div  className='item'>
                    <img src={noodles}></img>
                    <h4>Noodles </h4>
                    <p>$100 </p>
                </div>
                <div  className='item'>
                    <img src={redJuice}></img>
                    <h4>Strawberry Juice </h4>
                    <p>$90 </p>
                </div>
                <div  className='item'>
                    <img src={chocolate}></img>
                    <h4>Chocolate Ice </h4>
                    <p>$150 </p>
                </div>
                <div  className='item'>
                    <img src={cupIce}></img>
                    <h4>Cup Ice </h4>
                    <p>$80 </p>
                </div>
            </div>
        </div>
    );
}

export default Foods