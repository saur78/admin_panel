import React from 'react'
import '../css/ForgetPassword.css'
import bgVideo from '../assets/videos/production ID_4761426.mp4'
import { Link } from 'react-router-dom'

function ForgetPassword() {
  return (
    <div className='resetContainer'>
        <video loop autoPlay muted className='videoPlay'>
  <source src={bgVideo} type="video/mp4"/>
</video>

<div className='resetLogo'></div>
<div className='resetBox'>
  <form className='resetForm'>
    <div className='resetHeader'><h2>Check your email</h2></div>
    <p className='verificationText'>Please enter the verification code we sent to your registered email abc@d.com</p>
    <div className='passwordContainer'>
      <input className='passwordBox' type='text' maxLength={1}/>
      <input className='passwordBox' type='text' maxLength={1}/>
      <input className='passwordBox' type='text' maxLength={1}/>
      <input className='passwordBox' type='text' maxLength={1}/>
    </div>
    <button className='resendButton'>Resend Code in 00:30 sec</button>
    <Link to='/dashboard'> <button className='signInButton'>Sign In</button></Link>
  </form>
</div>


    </div>
  )
}

export default ForgetPassword
