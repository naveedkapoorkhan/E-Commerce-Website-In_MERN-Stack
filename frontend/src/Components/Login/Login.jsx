import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-field">          
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password'/>
        </div> 
        <Link to="/shop"><button>Login</button></Link>
        <p className="login-login">If you are not Register ?<Link to="/login"><span> Register here</span></Link></p>
        
      </div>
      
      
    </div>
  )
}

export default Login
