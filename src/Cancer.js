import React from "react"
import './App.css';
import logo from "./Fast-Cure.png"
import Hospital from "./Hospital";
import hospital1 from "./hospital1.jpg"
import hospital2 from "./hospital2.jpg"
import hospital3 from "./hospital3.jpg"
import {Link} from "react-router-dom"

function Cancer() {
  return (
    <div>
      <img src={logo} className="logo-hospitals"/>
      <Link to="/NationalHospital" class="Link-decoration">
        <Hospital photo={hospital1} name="National Hospital" distance={1.19} city="Zaoata, Nablus" rate={7.6}/>
      </Link>
      <Link to="/ArabicHospital" class="Link-decoration">
        <Hospital photo={hospital2} name="Arabic Hospital" distance={2.8} city="Asira, Nablus" rate={9.5}/>
      </Link>
      <Link to="/RamHospital" class="Link-decoration">
        <Hospital photo={hospital3} name="Ram Hospital" distance={10} city="Nabi Elyas, Qalqilia" rate={8.1}/>
      </Link>
    </div>
  );
}

export default Cancer;