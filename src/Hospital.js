import React from "react"
import './App.css';


function Hospital(props) {
  return (
    <a href="" className="Href-Hospital">
        <div className="Card-postion">
            <div className="The-Card">
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
            </div>
        </div>
    </a>
  );
}

export default Hospital;