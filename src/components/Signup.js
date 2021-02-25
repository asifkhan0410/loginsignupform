import React, { useState } from 'react'

function Signup() {
    const [name,setName] = useState('');
    const [username, setUsername]= useState('');
    const [password,setPassword]= useState('')
    const [pmatch,setPmatch] = useState(false);
    let data=[];

    function checkpassword(pass) {
        if(password === pass){
            console.log("passwordmatched");
            setPmatch(true);
        } else {
            setPmatch(false);
        }
    }
    function submitdetails(e){
        e.preventDefault();
        data.push([name,username,password])

        if(pmatch===true){
            localStorage.setItem('user', JSON.stringify(data))
            alert("Signup Sucessful");
            setName('');
            setPassword('');
            setUsername('')
        }

    }
    return (
        <div className="signuppage">
      <h1>C Player</h1>
      <form>
        <div className="entity"><span className="text">Name: </span><input type="text" id="name" placeholder="Name"   onChange={(e)=> setName(e.target.value) }/></div>
        <div className="entity"><span className="text">Username: </span><input type="text" id="username" placeholder="UserName" onChange={(e)=> setUsername(e.target.value) }/></div>
        <div className="entity"><span className="text">Password: </span><input type="password" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value) }/></div>
        <div className="entity"><span className="text">ConfirmPassword: </span><input type="password" id="confirm" placeholder="Confirm Password" onChange={(e)=> checkpassword(e.target.value)}/></div>
        <button id="send" onClick={submitdetails}>Sign Up</button>
      </form>
    </div>
    )
}

export default Signup
