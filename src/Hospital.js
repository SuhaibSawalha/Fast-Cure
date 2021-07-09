import React from "react"
import './App.css';


function Hospital(props) {
  return (
    <div className="Card-postion">
        <a href="" className="Href-Hospital">
            <img src={props.photo} className="Card-Of-Hospital"/>
            <div className="informations-about-hospital">
                <p>
                    {props.name}
                </p>
                <p>
                    {props.city}
                </p>
                <p>
                    rating: {props.rate} ⭐
                </p>
                <p>
                    {props.distance} km
                </p>
            </div>
        </a>
    </div>
  );
}

export default Hospital;