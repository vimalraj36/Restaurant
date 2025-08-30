import React from 'react'
import phone from './images/phoneicon.png'
import whatsapp from './images/whaticon.png'
import mail from './images/mail icon.png'
import shop from './images/Lashopicon.png'
import axios from  'axios'
import { useState,useEffect } from 'react'
// import map from './images/mapLocation.jpg'
import {FaPhone } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
    const [formData,setFormData]=useState({
        name:'',
        mobile:'',
        subject:'',
    });
const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
}

const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
        const response= await axios.post('http://localhost:5000/submit',formData);
        setData({ message: response.data.message ,type: "success" });
        console.log("Data submitted successfully:",response.data);
        setFormData({ name: "", mobile: "", subject: "" });
        
    }
    catch(err){
        console.log("Error in submitting form:",err);
        if (err.response) {
            
            setData({ message: err.response.data.message, type: "error" });
        } else {
            
            setData({ message: "Something went wrong. Please try again.", type: "error" });
        }
        // setData({ message:"Error in submitting form",type: "error" });
        
    }
    setFormData({
        name:'',
        mobile:'',
        subject:'',
    });
    console.log(formData);

}
const[data,setData]=useState({message:'',type:''});
useEffect(()=>{
    const fetchData=async()=>{
    try{
        
    const response=await axios.get('http://localhost:5000/submit');
    setData(response.data);
    }catch(err){
        console.log("Error in fetching data:",err);
    }
}
fetchData();
},[]);
    return (
        <div className='contactUs' id='Contact'>
            <h2 className='names'> Contact Us</h2>

            <div className='options'>
                <div>
                    <div className='item'>
                        <img src={phone}></img>
                        <h4>Phone</h4>
                        <p>+91 6385351439 </p>
                    </div>

                    <div className='item'>
                    <img src={mail}></img>
                        <h4> Mail</h4>
                        <p>VRfam@gmail.com</p>
                    </div>
                    
                </div>
                <div>
                    <div className='item'>
                    <img src={whatsapp}></img>
                        <h4>whatsApp </h4>
                        <p>730-236-3911</p>
                    </div>
                    <div className='item'>
                        <img src={shop}></img>
                        <h4>Our Shop </h4>
                        <p>Vedaranyam-614808 </p>
                    </div>
                </div>

            </div>
            <div className='touch'>
                <h2> Get In Touch</h2>
                <center><h4 style={{ color: data?.type === "error" ? "red" : data?.type === "success" ? "green" : "black" }}>
    {data?.message || "Welcome! Please fill out the form below."}
</h4>
</center>
                <form className='customer'  onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td><input type='text' required name='name' value={formData.name} onChange={handleChange} placeholder='Name'></input></td>
                        </tr>
                        <tr>
                            <td><input type='number' required name='mobile' value={formData.mobile} onChange={handleChange} placeholder='Mobile'></input></td>
                        </tr>
                        <tr>
                            <td><input type='text' required name='subject' value={formData.subject} onChange={handleChange} placeholder='Subject'></input></td>
                        </tr>
                        <tr>
                            <td><textarea placeholder='Messsage'></textarea></td>
                        </tr>
                        <button type="submit"  className='send'>Send Now</button>
                    </table>
                </form>
            </div>
            {/* <img  className='map' src={map}></img> */}
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.1103536045375!2d78.79213707354202!3d10.090043271481894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0067a028f8a8f9%3A0x9c2484c6df0fb26!2sAlagappa%20Chettiar%20Government%20College%20of%20Engineering%20%26%20Technology.!5e0!3m2!1sen!2sin!4v1727028057929!5m2!1sen!2sin" ></iframe></p>
        </div >
    );
}

export default Contact