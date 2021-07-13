import React from "react"
import './App.css';
import logo from "./Logo.png"
import {Link} from "react-router-dom";

function Main() {
  return (
    <div>
      <img src={logo} className="logo"/>
      <p className="Welcome-P">
        𝓕𝓐𝓢𝓣𝓒𝓤𝓡𝓔
      </p>
      <p className="explain">
        Book an appointment easily & quickly     
      </p>
      <p className="type-the-sickness">
        Describe your case
      </p>
      <form className="Submit-box">
            <textarea type="text" name="name" className="Input-box"/>
            <br/>
            <br/>
            <Link to = "/Cancer">
              <input type="submit" value="Submit" className="Submit-button"/>
            </Link> 
      </form>
    </div>
  );
}

export default Main;


// npm install react-scripts@2.1.8
