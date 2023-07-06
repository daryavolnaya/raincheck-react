import React, {useState} from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastTime from "./WeatherForecastTime";



export default function HourlyForecast(props){

  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
function handleResponse (response) {
  console.log(response);
 setForecastData(response.data.hourly);
 setLoaded(true);
}

    if (loaded) {
      return (
        <div className="Forecast">
          <div className="row">
{/* eslint-disable-next-line */}
            {forecastData.map(function(timeForecast, index) {

              if (index > 0 && index < 5) {
            return (
              <div className="col" key={index}>
            <WeatherForecastTime data={timeForecast}/>
            </div>
            )
            }
    })}
            
            </div>
        </div>
    )
 
    } else {
let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return null;
    }
}