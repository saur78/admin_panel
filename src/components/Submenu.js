import React from 'react'
import '../css/SubMenu.css'
import { Link, useNavigate } from 'react-router-dom'
import logoutIcon from '../assets/images/logout.svg'
import userIcon from '../assets/images/userIconBlack.svg'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/Features/loginSlice';


function Submenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(logout());
    navigate('/')
  }
  


  return (
<div className='subMenuUl'>
    <Link to='/hrprofile'><li><img src={userIcon} alt=''/>My Profile</li></Link>
    <li onClick={handleLogOut}><img src={logoutIcon} alt=''/>LogOut</li>
</div>
  )
}

export default Submenu
