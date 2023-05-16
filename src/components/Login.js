import React, {useEffect, useState } from "react";
import "../css/Login.css";
import bgVideo from "../assets/videos/production ID_4761426.mp4";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../redux/Features/loginSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()



const loginAuth=useSelector((state)=>state.login)
const dispatch=useDispatch()

const handleSignIn = async (event) => {
  event.preventDefault();
  await dispatch(fetchLogin({ email, password }));
};

useEffect(() => {
if (loginAuth.isLoggedIn===false){
    navigate('/login')
  }
 else if (loginAuth.isLoggedIn && loginAuth.token.jwt) {
    navigate("/");
  }

}, [loginAuth.isLoggedIn,loginAuth.token.jwt,navigate]);





 const handleResetPassword = ()=>{

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
            <h2>Sign In</h2>
          </div>
          <label className="loginLabel">Email Address</label>
          <input
            className="loginInput"
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="loginLabel">Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/forgetpassword" style={{ textDecoration: "none" }} >
            <div className="forgetPwd" onClick={handleResetPassword}> 
              <p>Forget Password?</p>
            </div>
            </Link>

            <button className="signInButton" onClick={handleSignIn}>
              Sign In
            </button>

        </form>
      </div>
    </div>
  );
}

export default Login;
