import React from 'react'
import "./CSS/LoginSignup.css"
import {Link} from "react-router-dom"
const LoginSignup = () => {
  
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password'/>
        </div> 
        <Link to="/shop"><button>Continue</button></Link> 
        <p className="loginsignup-login">Already have an account?<span><Link to="/register">Login here</Link></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default LoginSignup
