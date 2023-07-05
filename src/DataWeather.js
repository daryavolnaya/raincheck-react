import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";


export default function DataWeather(props){
    return <div className="">
        <div className="row above">
      <div className="col-2 weather">
        <ul>
          <WeatherTemperature celsius={props.data.temperature}/>
        <FormattedDate date={props.data.date}/>
       
        </ul>
        </div>
      <div className="col-2 icon"> 
      <ul>
          <li>
             <img src={props.data.iconUrl} alt={props.data.description}/>
        </li>
        <li className="description text-capitalize">
        {props.data.description}
        </li>
        </ul>
        </div>
        <div className="col-8"><Forecast coordinates={props.data.coordinates} /></div>
        
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