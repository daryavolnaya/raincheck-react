import React from "react";
import FormattedDate from "./FormattedDate";

export default function DataWeather(props){
    return <div className="">
        <div className="row above">
      <div className="col-3">
        <ul>
          <li className="temperature">
        {props.data.temperature}ºC
        </li>
        <FormattedDate date={props.data.date}/>
       
        </ul>
        </div>
      <div className="col-2 icon"> 
      <ul>
          <li>
             <img src="https://static-00.iconduck.com/assets.00/partly-cloudy-icon-2048x2017-zr2ino3n.png" alt="partly cloudy"/>
        </li>
        <li className="description text-capitalize">
        {props.data.description}
        </li>
        </ul>
        </div>
    </div>
    <div className="row main-content">
      <div className="col-7">
    <h2>📍 {props.data.city}</h2>
    <ul className="current-weather">
      <li>Humidity: {props.data.humidity}%</li>
      <li>Wind {props.data.wind} m/s</li>
      <li>Feels like {props.data.feelsLike}ºC</li>
    </ul>
    </div>
	</div>
    </div>
}