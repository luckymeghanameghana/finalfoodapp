import React from 'react'
import Navbar from './Navbar'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact-page">
      <h1>YumSpot Café</h1>

      <div className="contact-container">
        <div className="contact-card">
          <h3>Owner: Meghana</h3>
          <p>Meghana is the visionary behind YumSpot, a vibrant café dedicated to creating delightful experiences for food and ambiance lovers alike. With a passion for curating flavors and fostering connections, she envisioned YumSpot as more than just a café – it's a haven where people can savor unique dishes, unwind in a cozy setting, and create cherished memories with every visit.</p>
        </div>

        <div className="contact-card">
          <h3>Address</h3>
          <p>45 Espresso Street,</p>
          <p>Cafféville, Aroma District, 98765</p>
          <p>(Next to the Green Park)</p>
        </div>

        <div className="contact-card">
          <h3>Phone Number</h3>
          <p>+1 (555) 987-6543</p>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <p><a href="mailto:info@yumspot.com">info@yumspot.com</a></p>
        </div>

        <div className="contact-card">
          <h3>Website</h3>
          <p><a href="http://www.yumspot.com" target="_blank" rel="noopener noreferrer">www.yumspot.com</a></p>
        </div>

       

      </div>
    </div>
  )
}

export default Contact