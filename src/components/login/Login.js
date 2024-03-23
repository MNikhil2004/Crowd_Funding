import React, { useState } from "react";
// import "./App.css";
import './Login.css'

function Login() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      <div className="mainContainer">
        {isRegistered && <p className="registerTitle">Registration Page</p>}
        <div className="titleContainer">
          {!isRegistered && <p className="title">Login Page</p>}
        </div>
        <div className="formContainer">
          {!isRegistered && (
            <form className="App">
              <div className={'inputContainer'}>
                <input placeholder="Enter your username here" className={'inputBox'} />
              </div>
              <br />
              <div className={'inputContainer'}>
                <input type="password" placeholder="Enter your password here" className={'inputBox'} />
              </div>
              <br />
              <div className={'inputContainer'}>
                <input className={'inputButton'} type="submit" value="Login" />
              </div>
              <br />
              <div className={'inputContainer'}>
                <button className={'inputButton'} onClick={() => setIsRegistered(true)}>Register</button>
              </div>
            </form>
          )}
          {isRegistered && (
            <form className="App">
              <div className={'inputContainer'}>
                <input placeholder="Enter your email here" className={'inputBox'} />
              </div>
              <br />
              <div className={'inputContainer'}>
                <input placeholder="Enter your password here" className={'inputBox'} />
              </div>
              <br />
              <div className={'inputContainer'}>
                <input className={'inputButton'} type="submit" value="Register" />
              </div>
              <br />
              <div className={'inputContainer'}>
                <button className={'inputButton'} onClick={() => setIsRegistered(false)}>Back to Login</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  )
}

export default Login;