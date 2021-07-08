import React from "react"
import './App.css';
import logo from "./Fast-Cure.png"
import Search from "./Search";

function App() {
  return (
    <div>
      <img src={logo} className="logo"/>
      <p className="Welcome-P">
        Welcome everyone to FastCure
      </p>
      <p className="explain">
        If you have problems making reservations at hospitals to get to a certain doctor or if people just don't show up on time, so your reservation time changes FastCure will help you with those problems
      </p>
      <p className="explain">
        Press the button to get started
      </p>
      <button className="Start" onClick={event =>  window.location.href='Search.js'}> 
        Start
      </button>
    </div>
  );
}

export default App;


// npm install react-scripts@2.1.8
