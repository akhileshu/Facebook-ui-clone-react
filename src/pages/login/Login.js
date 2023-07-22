import React from 'react'
import './login.css'
import {Link } from "react-router-dom"

function Login() {
  return (
    <div className='loginPage'>
        <div className='loginLeft'>
            <p className='appTitle'>mySocial</p>
            <p className='appTagline'>connect with friends and the world around you with Akhilesh </p>
        </div>
        <div className='loginRight'>
            <input placeholder='Email' type="email" />
            <input placeholder='Password' type="password" />
            {/* after clicking login go to home */}
            <Link  to="/">
            <button className='loginBtn'>Log in</button> 
            </Link>
            <p>Forgot password?</p>
            <Link  to="/register">
            <button className='registerBtn'>Create New Account</button>
            </Link>

        </div>
    </div>
  )
}

export default Login