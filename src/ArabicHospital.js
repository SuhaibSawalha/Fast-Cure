import React from "react"
import './App.css';
import logo from "./Fast-Cure.png"
import hospital2 from "./hospital2.jpg"
import {Link} from "react-router-dom"

function ArabicHospital() {
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
        <img src={hospital2} className="Hospital-Image"/>
        <p className="Explain-Of-Hospital">
            The Arabic hospital in Asira is a hospital that specializes in heart treatments and surgeries.
        </p>    
        <p className="Explain-Of-Hospital">
            It has some of the most famous doctors in Palestine such as : Rafat Abdulfatah, Ayham Kamal, and Baha jaghoob        
        </p>
    </div>
  );
}

export default ArabicHospital;