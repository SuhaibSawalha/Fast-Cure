import React from "react"
import './App.css';
import logo from "./Fast-Cure.png"
import hospital1 from "./hospital1.jpg"

function Search() {
  return (
    <div className="The-Paper">
        <img src={hospital1} className="Paper-photo"/>
        <p className="Paper-Name">
            National Hospital
        </p>
        <img src={logo} className="Paper-logo"/>
    </div>
  );
}

export default Search;