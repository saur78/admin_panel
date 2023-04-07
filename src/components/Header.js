import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="navLeft">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png"
            alt=""
          />
        </div>
        <div className="dashboard">
          <div className="active">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRxNgSp9EC__7ydaBVCWW7DrwjPd8MNT2sEIqzdhF&s"
              alt=""
            />
            <p>Dashboard</p>
          </div>
        </div>
      </div>
      <div className="navRight">
        <div className="empManagement">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRxNgSp9EC__7ydaBVCWW7DrwjPd8MNT2sEIqzdhF&s"
            alt=""
          />
          <p>Employee Management</p>
        </div>
        <div className="adminProfile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            alt=""
          />
          <p>Sebastian</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
