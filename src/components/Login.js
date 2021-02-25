import React, { useState } from 'react'

function Login() {
    const [username, setUsername]= useState('');
    const [password,setPassword]= useState('')
    const data = JSON.parse(localStorage.getItem('user')) || [];
    console.log(data)

    function loginsuccess(e){
        e.preventDefault();
        const index = data.map((user,i) => {
            if(user[1] === username) return i;
        })
        console.log(data[index[0]][2])
        if(password === data[index[0]][2]){
            console.log("login success");
            setUsername('');
            setPassword('');
            alert(`Login Successful ${data[index[0]][0]}`);
        }
        
    }
    return (
        <div className="loginpage">
        <h1>C Player</h1>
        <form>
            <div className="entity"><span className="text">Username </span><input type="text" id="username" placeholder="UserName" onChange={(e)=> setUsername(e.target.value) }/></div>
            <div className="entity"><span className="text">Password </span><input type="password" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value) } /></div>
        <button id="send" onClick={loginsuccess} >Login</button>
      </form>
    </div>
    )
}

export default Login
