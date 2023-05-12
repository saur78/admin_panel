import React from 'react'
import '../css/Footer.css'
import logo from '../assets/images/vabbr.png'

function Footer() {
  return (
    <div className='footer'>
      <h2>Chat Support</h2>
      <div className='footerDetails'>
        <div className='footerProfile'><img src='https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png' alt=''/></div>
        <div className='FooterContent'>
          <p>Joe sedan</p>
          <p>+91 8080767654</p>
          <p>joe.sedan@company.com</p>
          <img src={logo} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Footer
