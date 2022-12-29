import React from 'react'
import './Contact.css'
import logo from './againnew.jpeg'


const Contact = () => {
  return (
    <div className='contactpage'>
        <h1>Contact Us</h1>
        <div className="both">
          <div className="contactleft">
          <h2> Core Computer Products Private Limited</h2>
          <h4><span>Address: &nbsp;</span> J-43, 'S' block, M I D C, </h4>
          <h4> Bhosari, Pimpri-Chinchwad, Pune.</h4>
          <h4> Maharastra 411026</h4>
          <h4><span>Phone:  &nbsp;</span> +91 9822028044</h4>
          <h4><span>Email: &nbsp;</span> coreautos@gmail.com</h4>
          </div>
          <div className="contactright">
            <img src={logo} width='200' alt="logo" />
          </div>
        </div>
    </div>
  )
}

export default Contact