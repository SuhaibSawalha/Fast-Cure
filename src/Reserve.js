import React from "react"
import './App.css';
import logo from "./Fast-Cure.png"
import {Link} from "react-router-dom";

function Search() {
  return (
    <div>
        <img src={logo} className="logo-Reserve"/>
        <br/>
        <br/>
        <br/>
        <input placeholder="Full Name" type="text" name="name" className="Input-Reserve-box"/>
        <input placeholder="Mobile Number" type="text" name="name" className="Input-Reserve-box"/>
        <input placeholder="Email" type="text" name="name" className="Input-Reserve-box"/>
        <br/>
        <br/>
        <input placeholder="Appointment Date" type="text" name="name" className="Input-Reserve-box"/>
        <input placeholder="Appointment Time" type="text" name="name" className="Input-Reserve-box"/>
        <input placeholder="Insurance" type="text" name="name" className="Input-Reserve-box"/>
        <Link to="/Paper">
            <button className="Reserve-button-information">
                Reserve
            </button>
        </Link>
    </div>
  );
}

export default Search;