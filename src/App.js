import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import LoginSignup from './components/LoginSignup';
import Signupsuccess from './components/Signupsuccess';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <Router>
    <div className="app">
        <Switch> 
          <Route path="/loginsuccess">
            <div className="dashboard">
              <h1>C Player</h1>
              <div className="loginsuccess__message">
                <h1>Welcome to the dashboad <br/>
                <span className = "username">{user!==null? user[0] : ""}</span></h1>
                <Link to="/"><button className="back" onClick={() => setUser(null)}>LogOut</button></Link>
              </div>            
            </div>
          </Route>
          <Route path="/signupsuccessful"><Signupsuccess/></Route>
          <Route path="/login"><Login userset={(user) => setUser(user)}/></Route>
          <Route path="/signup"> <Signup /></Route>          
          <Route path ="/"><LoginSignup/></Route>
        </Switch>      
    </div>
    </Router>
  );
}

export default App;
