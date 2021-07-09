import React from "react"
import Search from "./Search";
import './App.css';
import logo from "./Fast-Cure.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Link to="/Search"> ssssssssssssssssss </Link>
      <Search />
      </Router>
      {/* <img src={logo} className="logo"/>
      <p className="Welcome-P">
        Welcome everyone to FastCure
      </p>
      <p className="explain">
        If you have problems making reservations at hospitals to get to a certain doctor or if people just don't show up on time, so your reservation time changes FastCure will help you with those problems
      </p>
      <p className="explain">
        Press the button to get started
      </p>
      <button className="Start" onClick={event =>  window.location.href=''}> 
        Start
      </button> */}
    </div>
  );
}

export default App;


// npm install react-scripts@2.1.8
