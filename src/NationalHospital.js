import React from "react"
import './App.css';
import logo from "./Fast-Cure.png"
import hospital1 from "./hospital1.jpg"

function NationalHospital() {
  return (
    <div>
        <img src={logo} className="logo-Hospital-explain"/>
        <img src={hospital1} className="Hospital-Image"/>
        <button className="Reserve-button">

        </button>
        <p className="Explain-Of-Hospital">
            The national hospital in Nablus is an amzaing hospital that has many incredible orthopedic doctors and specializes at treating these injuries.
        </p>
        <p className="Explain-Of-Hospital">
            Example of doctors: Suhaib Sawalha, Aws Khlaif, Izz Edden Sawalmeh, and Abood Salman.
        </p>
    </div>
  );
}

export default NationalHospital;
