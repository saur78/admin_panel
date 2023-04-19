import React from 'react'
import '../css/SubMenu.css'
import { Link } from 'react-router-dom'
import logoutIcon from '../assets/images/logout.svg'
import userIcon from '../assets/images/userIconBlack.svg'

function Submenu() {
  return (
<div className='subMenuUl'>
    <Link to='/hrprofile'><li><img src={userIcon} alt=''/>My Profile</li></Link>
    <Link to='/'><li><img src={logoutIcon} alt=''/>LogOut</li></Link>
</div>
  )
}

export default Submenu
