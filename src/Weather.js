import React, {useState} from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather (props){
const [weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      time: "14:24",
      weekday: "Sun",
      date: "JUN 21",
    })
  }

  if (weatherData.ready){
	return (<div className="Weather">
    <form className="mb-2">
      <div className="row">
        <div className="col-9">
    <input type="search" placeholder="enter a city..." className="form-control" autoFocus="on"></input>
   </div>
    <div className="col-3">
    <input type="submit" value="Search" className="btn btn-dark w-100"/>
    </div>
    </div>
</form>
    <div className="row above">
      <div className="col-3">
        <ul>
          <li className="temperature">
        {weatherData.temperature}ºC
        </li>
         <li>
        {weatherData.weekday} / {weatherData.date}
        </li>
         <li>
        {weatherData.time}
        </li>
        </ul>
        </div>
      <div className="col-2 icon"> 
      <ul>
          <li>
             <img src="https://static-00.iconduck.com/assets.00/partly-cloudy-icon-2048x2017-zr2ino3n.png" alt="partly cloudy"/>
        </li>
        <li className="description text-capitalize">
        {weatherData.description}
        </li>
        </ul>
        </div>
    </div>
    <div className="row main-content">
      <div className="col-7">
    <h2>📍 {weatherData.city}</h2>
    <ul className="current-weather">
      <li>Humidity: {weatherData.humidity}%</li>
      <li>Wind {weatherData.wind} m/s</li>
      <li>Feels like {weatherData.feelsLike}ºC</li>
    </ul>
    </div>
	</div>
    </div>);
  } else {

  let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading..."
}

}