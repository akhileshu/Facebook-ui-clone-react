import React from "react";
import "../login/login.css";
import {Link } from "react-router-dom"

function Register() {
  return (
    <div className="loginPage">
      <div className="loginLeft">
        <p className="appTitle">mySocial</p>
        <p className="appTagline">
          connect with friends and the world around you with Akhilesh{" "}
        </p>
      </div>
      <div className="loginRight">
        <input placeholder="UserName" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="Password" />
        <input placeholder="Password Again" type="password" />

        <Link className="custom-link" to="/login">
        <button className="registerBtn">Sign Up</button>
        </Link>
        <Link className="custom-link" to="/login">
        <button className="loginBtn">Login Into Account </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
