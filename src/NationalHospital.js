import React from "react"
import './App.css';
import logo from "./Logo.png"
import hospital1 from "./hospital1.jpg"
import {Link} from "react-router-dom"

function NationalHospital() {
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
        <img src={hospital1} className="Hospital-Image"/>
        <div className="Hospital-Explain-Card">
            <p /*className="Explain-Of-Hospital"*/>
                The national hospital in Nablus is an amzaing hospital that has many incredible orthopedic doctors and specializes at treating these injuries.
            </p>
            <p /*className="Explain-Of-Hospital"*/>
                Example of doctors: Suhaib Sawalha, Aws Khlaif, Izz Edden Sawalmeh, and Abood Salman.
            </p>
        </div>
    </div>
  );
}

export default NationalHospital;
