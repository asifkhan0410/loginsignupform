import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [login, setLogin] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="app">
      {toggle===false? <div className="app__loginsignup">
          <h1>C Player</h1>
          <div className="buttons">
            <button className="login" onClick={() => {setLogin(true); setToggle(true)}}>Login</button>
            <button className="signup" onClick={() => {setLogin(false); setToggle(true)}}>SignUp</button>
          </div>
        </div> : (login === true ? <Login /> : <Signup />)}
      
    </div>
  );
}

export default App;
