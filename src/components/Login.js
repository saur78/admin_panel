import React from 'react'
import '../css/Login.css'
import bgVideo from '../assets/videos/production ID_4761426.mp4'

function Login() {
  return (
    <div className='loginContainer'>
        <video loop autoPlay muted className='videoPlay'>
  <source src={bgVideo} type="video/mp4"/>
</video>

<div className='loginLogo'></div>
<div className='loginBox'>
  <form className='loginForm'>
    <div className='signIn'><h2>Sign In</h2></div>
    <label className='loginLabel'>Email Address</label>
    <input className='loginInput' type='email' placeholder='Enter your email address'/>
    <label className='loginLabel'>Password</label>
    <input className='loginInput' type='password' placeholder='Enter your email address'/>
    <div className='forgetPwd'><p>Forget Password?</p></div>
    <button className='signInButton'>Sign In</button>
  </form>
</div>


    </div>
  )
}

export default Login
