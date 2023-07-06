import React, {useState, useEffect} from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";



export default function Forecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

function handleResponse (response) {
 setForecastData(response.data.daily);
 setLoaded(true);
}

    if (loaded) {
      return (
        <div className="Forecast">
          <div className="row">
{/* eslint-disable-next-line */}
            {forecastData.map(function(dailyForecast, index) {

              if (index > 0 && index < 6) {
            return (
              <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast}/>
            </div>
            )
            } else{
              return null;
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