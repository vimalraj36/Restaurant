import React from 'react'
import { FaCrown } from 'react-icons/fa';


const Header = () => {
  return (
    
        <nav className='navbar'>
            <h2 className='heading'><FaCrown/>Hotel Royal</h2>
            <div className='navItems'>
                <ul>
                    <li> <a href='#Home'>Home </a></li>
                    <li> <a href='#About Us'>About Us</a></li>
                    <li> <a href='#Foods'>Foods </a></li>
                    <li><a href='#Booking'>Booking</a></li>
                    <li> <a href='#Contact'>Contact Us</a></li>
                </ul>
            </div>

        </nav>  
     );
}
export default Header