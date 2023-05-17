import React, {useEffect, useState } from "react";
import "../css/Login.css";
import bgVideo from "../assets/videos/production ID_4761426.mp4";
import { Link, useNavigate } from "react-router-dom";


function CreateNewPassword() {
  const [newPswd, setNewPswd] = useState("");
  const [cnfPswd,setCnfPswd] = useState('')
  const navigate = useNavigate()


  const handleSubmit =()=>{
    if (newPswd===cnfPswd){
    navigate('/login')
}
  }



  return (
    <div className="loginContainer">
      <video loop autoPlay muted className="videoPlay">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="loginLogo"></div>
      <div className="loginBox">
        <form className="loginForm">
          <div className="signIn">
            <h2>Create New Password</h2>
          </div>
          <label className="loginLabel">New Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your new password"
            onChange={(e) => setNewPswd(e.target.value)}
          />
          <label className="loginLabel">Confirm New Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Confirm your new password"
            onChange={(e) => setCnfPswd(e.target.value)}
          />


            <button className="signInButton" onClick={handleSubmit}>
              Submit
            </button>

        </form>
      </div>
    </div>
  );
}

export default CreateNewPassword;
