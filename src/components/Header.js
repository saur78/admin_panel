import React from "react";
import "../css/Header.css";
import { NavLink } from "react-router-dom";
import documentIcon from '../assets/images/document-text white.svg';
import logo from '../assets/images/vabbr.png';
import empManagementIcon from '../assets/images/receipt-discount-black.svg'
import userIcon from '../assets/images/vuesax-linear-user.svg'

function Header() {

  return (
    <div className="header">
      <div className="navLeft">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <div className="dashboard">
        <NavLink to="/" className={({isActive}) => isActive? 'active' : "dashboard" }>
                 
        <img className="dashboardIcon" src={documentIcon} alt="" />
              <p>Dashboard</p>
              </NavLink>
        </div>
      </div>
      <div className="navRight">
        <div className="empManagement">
        <NavLink to="/empmanagement" className={({isActive}) => isActive?"active" : "empManagement" }>
         <img src={empManagementIcon} alt="" />
         <p>Employee Management</p>
            </NavLink>
        </div>
        <div className="adminProfile">
        <NavLink to="/hrprofile" className={({isActive}) => isActive?"active" : "adminProfile" }>
          <img src={userIcon} alt="" />
          <p>Sebastian</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
