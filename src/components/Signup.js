import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import FileUploader from './FileUpload';

function Signup() {
    const history = useHistory();
    const [name,setName] = useState('');
    const [username, setUsername]= useState('');
    const [password,setPassword]= useState('')
    const [pmatch,setPmatch] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    let data=[];

    function checkpassword(pass) {
        if(password === pass){
            console.log("passwordmatched");
            setPmatch(true);
        } else {
            setPmatch(false);
        }
    }
    console.log(selectedFile)
    function submitdetails(e){
        e.preventDefault();
        data.push([name,username,password,selectedFile])

        if(pmatch===true){
            localStorage.setItem('user', JSON.stringify(data))
            alert("Signup Sucessful");
            setName('');
            setPassword('');
            setUsername('');
            history.push('/signupsuccessful')
        }else{
            alert('password didnt match');
        }

    }
    return (
    <div className="signuppage">
        <h1>C Player</h1>
        <form>
            <div className="entity"><span className="text">Name: </span><input type="text" id="name" placeholder="Name"   value={name} onChange={(e)=> setName(e.target.value) }/></div>
            <div className="entity"><span className="text">Username: </span><input type="text" id="username" placeholder="UserName" value={username} onChange={(e)=> setUsername(e.target.value) }/></div>
            <div className="entity"><span className="text">Password: </span><input type="password" id="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value) }/></div>
            <div className="entity"><span className="text">ConfirmPassword: </span><input type="password" id="confirm" placeholder="Confirm Password" onChange={(e)=> checkpassword(e.target.value)}/></div>
        
            <FileUploader
                onFileSelectSuccess={(file) => setSelectedFile(file)}
                onFileSelectError={({ error }) => alert(error)}
            />
        
            <div className="buttons__signup">
                <button id="send" onClick={submitdetails} type="submit">Sign Up</button>
                <Link to="/"><button className="back">Back</button></Link>
            </div>
        </form>
    </div>
    )
}

export default Signup
