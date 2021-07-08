import React from "react"
import './App.css';
import logo from "./Fast-Cure.png"

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
            <input type="submit" value="Submit" className="Submit-button"/>
        </form>
    </div>
  );
}

export default Search;