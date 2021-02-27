import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

function Login({userset}) {
    const history= useHistory();
    const [username, setUsername]= useState('');
    const [password,setPassword]= useState('');
    const data = JSON.parse(localStorage.getItem('user')) || [];

    function loginsuccess(e){
        e.preventDefault();
        const index = data.map((user,i) => {
            if(user[1] === username) return i;
        })
        const user = data[index[0]];
        if(password === data[index[0]][2]){
            userset(user);
            history.push('/loginsuccess') // this changes the url with the required route
        }else{
            alert("username/password is wrong")
        }
        
        setUsername('');
        setPassword('');
    }
    

    return (
        <div className="loginpage">
        <h1>C Player</h1>
        <form>
            <div className="entity"><span className="text">Username </span><input type="text" id="username" placeholder="UserName" value={username} onChange={(e)=> setUsername(e.target.value) }/></div>
            <div className="entity"><span className="text">Password </span><input type="password" id="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value) } /></div>
        
            <div className="buttons__login">
                <button id="send" onClick={loginsuccess} type="submit" >Login</button>
                <Link to="/"><button className="back">Back</button></Link>
            </div>
      </form>
    </div>
    )
}

export default Login
