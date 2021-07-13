import React from "react"
import './App.css';
import logo from "./Logo.png"
import {Link} from "react-router-dom";

function Search() {
  return (
    <div>
        <img src={logo} className="logo-Reserve"/>
        <br/>
        <br/>
        <br/>
        <input placeholder="ID Number" type="text" name="name" className="Input-Reserve-box"/>
        <input placeholder="Mobile Number" type="text" name="name" className="Input-Reserve-box"/>
        <input placeholder="Email" type="text" name="name" className="Input-Reserve-box"/>
        <br/>
        <br/>
        <input placeholder="Appointment Date" type="text" name="name" className="Input-Reserve-box"/>
        <input placeholder="Appointment Time" type="text" name="name" className="Input-Reserve-box"/>
        <input placeholder="Insurance" type="text" name="name" className="Input-Reserve-box"/>
        <button className="Reserve-button-information" onClick={event => alert("Check your email")}>
          Reserve
        </button>
    </div>
  );
}

export default Search;