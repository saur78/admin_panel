import React from 'react'
import '../css/HRProfile.css'
import userIcon from '../assets/images/profile-user.svg'
import emailIcom from '../assets/images/email.svg'
import callIcon from '../assets/images/call.svg'

function HRProfile() {
  return (
    <div>
      <div className='hrProfile'>
        <div className='hrProfilePic'>
        <img src='https://www.citypng.com/public/uploads/preview/download-black-male-user-profile-icon-png-116371332534k5baafcll.png' alt=''/>
        </div>
        <div className='hrProfileInfo'>
        <h3>Sebestian Greban</h3>
        <p>HR</p>
        </div>
        </div>
        <div className='hrProfileDetails'>
            <h2>Basic Information</h2>
            <div className='profileDetailsCard'>
            <div className='profileDetailsSingle'>
                <div className='profileDetailsIcon'><img src={userIcon} alt=''/></div>
                <div className='profileName'>
                <p>First Name</p>
                <p className='hrName'>Sebestian</p>
                </div>
            </div>
            <div className='profileDetailsSingle'>
                <div className='profileDetailsIcon'><img src={userIcon} alt=''/></div>
                <div className='profileName'>
                <p>First Name</p>
                <p className='hrName'>Sebestian</p>
                </div>
            </div>
            <div className='profileDetailsSingle'>
                <div className='profileDetailsIcon'><img src={callIcon} alt=''/></div>
                <div className='profileName'>
                <p>Phone Number</p>
                <p className='hrName'>123456789</p>
                </div>
            </div>
            <div className='profileDetailsSingle'>
                <div className='profileDetailsIcon'><img src={emailIcom} alt=''/></div>
                <div className='profileName'>
                <p>Email</p>
                <p className='hrName'>abc@de.fgh</p>
                </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default HRProfile
