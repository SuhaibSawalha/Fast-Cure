import React from "react"
import './App.css';
import logo from "./Fast-Cure.png"
import {Link} from "react-router-dom";

function Search() {
  return (
    <div>
        <img src={logo} className="logo"/>  
        <p className="explain">
            Just Type in our sickness right here and we will show you a bunch of hospitals to cure your sickness
        </p>
        <form className="Submit-box">
            <input type="text" name="name" className="Input-box"/>
            <br/>
            <br/>
            <Link to = "/Cancer">
              <input type="submit" value="Submit" className="Submit-button"/>
            </Link> 
        </form>
    </div>
  );
}

export default Search;