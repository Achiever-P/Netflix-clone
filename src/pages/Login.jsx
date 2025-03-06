import React, { useState } from 'react'; // Import useState
import './Login.css';
import logo from '../assets/logo.png';

const Login = () => {
  const [signState, setSignState] = useState("Sign In"); // Initialize state

  return (
    <div className='login'>
      {/* Logo */}
      <img src={logo} className='login-logo' alt="Netflix Logo" />

      {/* Login Form */}
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {/* Conditional Input for Sign-Up */}
          {signState === "Sign Up" && (
            <input type="text" placeholder='Your Name' />
          )}
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button type="submit">{signState}</button>

          {/* Form Help */}
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' id='rememberMe' />
              <label htmlFor='rememberMe'>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        {/* Form Switch */}
        <div className='form-switch'>
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span onClick={() => setSignState("Sign Up")}> Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setSignState("Sign In")}> Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
