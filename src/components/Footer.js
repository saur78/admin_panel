import React from 'react'
import '../css/Footer.css'

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
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Footer
