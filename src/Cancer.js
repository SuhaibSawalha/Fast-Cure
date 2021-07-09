import React from "react"
import './App.css';
import logo from "./Fast-Cure.png"
import Hospital from "./Hospital";
import hospital1 from "./hospital1.jpg"
import hospital2 from "./hospital2.jpg"
import hospital3 from "./hospital3.jpg"


function Cancer() {
  return (
    <div>
      <img src={logo} className="logo-hospitals"/>
      <Hospital photo={hospital1} name="National Hospital" distance={1.19} city="Zaoata, Nablus" rate={7.6}/>
      <Hospital photo={hospital2} name="Arabic Hospital" distance={2.8} city="Asira, Nablus" rate={9.5}/>
      <Hospital photo={hospital3} name="Ram Hospital" distance={10} city="Nabi Elyas, Qalqilia" rate={8.1}/>
    </div>
  );
}

export default Cancer;