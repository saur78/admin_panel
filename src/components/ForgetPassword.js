import React, { useEffect, useState } from 'react'
import '../css/ForgetPassword.css'
import bgVideo from '../assets/videos/production ID_4761426.mp4'
import { Link } from 'react-router-dom'

function ForgetPassword() {
  const [resendCounter, setResendCounter] = useState(30);
  const [email, setEmail] = useState('abcdef@g.com');

  //Resend Password Counter
  useEffect(() => {
    let interval = null;
    if (resendCounter > 0) {
      interval = setInterval(() => {
        setResendCounter(resendCounter - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [resendCounter]);


  //Email Masking
  const maskEmail = (email) => {
    const [username, domain] = email.split('@');
    const maskedUsername = username.charAt(0) + '*'.repeat(username.length - 2) + username.charAt(username.length - 1);
    return maskedUsername + '@' + domain;
  };


  //Focus to next input box of password

const inputs = document.querySelectorAll('input');  

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
  input.addEventListener('keydown', (event) => {
    
    if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
      inputs[index - 1].focus();      
    }
  });
});

  
  
  
  return (    
    <div className='resetContainer'>
        <video loop autoPlay muted className='videoPlay'>
  <source src={bgVideo} type="video/mp4"/>
</video>

<div className='resetLogo'></div>
<div className='resetBox'>
  <form className='resetForm'>
    <div className='resetHeader'><h2>Check your email</h2></div>
    <p className='verificationText'>Please enter the verification code we sent to your registered email {maskEmail(email)}</p>
    <div className='passwordContainer'>
      <input className='passwordBox' type='text' maxLength={1}/>
      <input className='passwordBox' type='text' maxLength={1}/>
      <input className='passwordBox' type='text' maxLength={1}/>
      <input className='passwordBox' type='text' maxLength={1}/>
    </div>
    <button className='resendButton' disabled={resendCounter > 0}>Resend Code in 00:{resendCounter<10? '0'+resendCounter:resendCounter} sec</button>
    <Link to='/dashboard'> <button className='signInButton'>Sign In</button></Link>
  </form>
</div>


    </div>
  )
}

export default ForgetPassword
