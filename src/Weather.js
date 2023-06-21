import React from "react";

import "./Weather.css";

export default function Weather (){
	return (<div className="Weather">
    <form className="mb-2">
      <div className="row">
        <div className="col-9">
    <input type="search" placeholder="enter a city..." className="form-control"></input>
   </div>
    <div className="col-3">
    <input type="submit" value="Search" className="btn btn-dark px-md-5"/>
    </div>
    </div>
</form>
    <div className="row above">
      <div className="col-3">
        <ul>
          <li className="temperature">
        29ºC
        </li>
         <li>
        Sun / JUN 21
        </li>
         <li>
        14:24
        </li>
        </ul>
        </div>
      <div className="col-2 icon"> 
      <ul>
          <li>
             <img src="https://static-00.iconduck.com/assets.00/partly-cloudy-icon-2048x2017-zr2ino3n.png" alt="partly cloudy"/>
        </li>
        <li className="description">
        Cloudy
        </li>
        </ul>
        </div>
    </div>
    <div className="row main-content">
      <div className="col-7">
    <h2>📍 Brooklyn, USA</h2>
    <ul className="current-weather">
      <li>Humidity: 67%</li>
      <li>Chance of rain: 11%</li>
      <li>Wind 2 m/s</li>
      <li>Feels like 27ºC</li>
    </ul>
    </div>
	</div>
    </div>);
}