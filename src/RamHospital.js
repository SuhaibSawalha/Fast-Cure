import React from "react"
import './App.css';
import logo from "./Fast-Cure.png"
import hospital3 from "./hospital3.jpg"
import {Link} from "react-router-dom"


function RamHospital() {
  return (
    <div>
        <img src={logo} className="logo-Hospital-explain"/>
        <div className="Reserve-Postion">
            <p className="Reserve-explain">
                To reserve press the following button
            </p>
            <Link to="/Reserve">
                <button className="Reserve-button">
                    Reserve
                </button>
            </Link>
        </div>
        <img src={hospital3} className="Hospital-Image"/>
        <p className="Explain-Of-Hospital">
            The Ram hospital in Ramallah is a hospital that is  known all over Palestine or its special Cancer treatments involving dome of the best doctors all over Palestine for
        </p>    
        <p className="Explain-Of-Hospital">
            Example of doctors: Uchiha Itachi, Lelouch Lamperouge, Levi Ackerman, and Tala Edaily
  
        </p>
    </div>
  );
}

export default RamHospital;