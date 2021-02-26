import React from 'react'
import { Link } from 'react-router-dom'
import success from '../images/success.svg'

function Signupsuccess() {
    return (
        <div className="signupsuccess">
            <h1>C Player</h1>
            <div className="signupsuccess__message">
                <img src={success} alt="Success"/>
                <h1>SignUp Successfull</h1>
            </div>
            <div className="buttons">
                <Link to ='/login'><button className="login">Login</button></Link>
          </div>
            
        </div>
    )
}

export default Signupsuccess
