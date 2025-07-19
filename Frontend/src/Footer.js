import React from 'react'
import phone from './images/phoneicon.png'
import mail from './images/mail icon.png'
import location from './images/location.png'
const Footer = () => {
    return (
        <div className='foot'>

            <div className='prime'>
                <div className='royal'>
                    <p>Hotel Royal</p>
                    <p>Enjoy stylish accommodations and exceptional servive in a prime location</p>
                </div>
                <div className='info'>
                    <div className='sync'>
                        <img src={phone}></img>
                        <p>+91 -63853-51439</p>
                    </div>
                    <div className='sync'>
                        <img src={mail}></img>
                        <p>VRfam@gmail.com</p>
                    </div>
                    <div className='sync'>
                        <img src={location}></img>
                        <p>vedaranyam-614808</p>
                    </div>
                </div>
            </div>
            <h3>Copyright &copy; 2024 VRfamily | powered by VRfamily</h3>
        </div>
    );
}

export default Footer