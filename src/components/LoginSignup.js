import React from 'react'
import { Link } from 'react-router-dom'

function LoginSignup() {
    return (
        <div className="app__loginsignup">
          <h1>C Player</h1>
          <div className="buttons">
            <Link to ='/login'><button className="login">Login</button></Link>
            <Link to = '/signup'><button className="signup">SignUp</button></Link>
          </div>
        </div>
    )
}

export default LoginSignup
