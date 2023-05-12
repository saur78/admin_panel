import React, { useState } from "react";
import "../css/Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/vabbr.png";
import documentIconWhite from "../assets/images/document-text white.svg";
import documentIconBlack from '../assets/images/document-text-black.svg'
import empMgmtIconWhite from '../assets/images/receipt-discount-white.svg'
import empMgmtIconBlack from "../assets/images/receipt-discount-black.svg";
import userIconBlack from '../assets/images/userIconBlack.svg'
import Submenu from "./Submenu";
import NavPages from "./NavPages";


function Header() {
  const [isActiveTab, setActiveTab] = useState("dashboard");
  const handleOnActiveTab = (tabName) => {
    setActiveTab(tabName);
  };

  const [showMenu, SetShowMenu]=useState(false)



  const handleUserOpen=()=>{
    SetShowMenu(true)    
  }

  const handleUserMouseLeave = () => {
    SetShowMenu(false);
  };

  




  return (
    <>
    <div className="header">
      <div className="navLeft">
        <div className="logo">
         <Link to='/dashboard'> <img src={logo} alt="" /></Link>
        </div>
        <div className="dashboard">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => {
              if (isActive) {
                handleOnActiveTab("dashboard");
                return "active";
              } else {
                setActiveTab('')
                return "dashboard";
              }
            }}
          >
            {isActiveTab === "dashboard" ? (
              <img src={documentIconWhite} alt="" />
            ) : (
              <img src={documentIconBlack} alt="" />
            )}

            <p>dashboard</p>
          </NavLink>
        </div>
      </div>
      <div className="navRight">
        <div className="empManagement">
          <NavLink
            to="/empmanagement"
            className={({ isActive }) => {
              if (isActive) {
                handleOnActiveTab("empManagement");
                return "active";
              } else {
                return "empManagement";
              }
            }}
          >
            {isActiveTab === "empManagement" ? (
              <img src={empMgmtIconWhite} alt="" />
            ) : (
              <img src={empMgmtIconBlack} alt="" />
            )}

            <p>Employee Management</p>
          </NavLink>
        </div>
        <div className="adminProfile" onClick={handleUserOpen} onMouseLeave={handleUserMouseLeave} >
          <img src={userIconBlack} alt=''/>
        <p >Sebastian
        { showMenu && <Submenu/>}
        </p>

        </div>
      </div>
    </div>
    <NavPages/>
    </>
  );
}

export default Header;
