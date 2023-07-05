import React from "react";
import "./Forecast.css";
import axios from "axios";



export default function Forecast(props){
function handleResponse (response) {
 console.log(response);
}

 let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
    return (
        <div className="Forecast">
            <div className="col-3">
              <div className="Forecast-day">Thu</div>
             <div className="Forecast-icon"> <img src="" alt="icon"/></div>
              <span className="Forecast-temperature-max">27º</span>
              <span className="Forecast-temperature-min">24º</span>
            </div>
            
        </div>
    )
}