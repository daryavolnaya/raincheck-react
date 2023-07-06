import React from "react";

export default function WeatherForecastTime(props){

function time(){
  let date = new Date(props.data.dt * 1000)

  let hours = ["00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00"];
  let hour = date.getHours();
  return hours[hour];
}

  function temperature(){
    let temperature = Math.round(props.data.temp)
    
    return `${temperature}º`;
  }

return (
<div className="WeatherForecastDay">

              <div className="Forecast-time">{time()}</div>
             <div className="Forecast-icon"> <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="icon"/></div>
              <span className="Forecast-temperature">{temperature()} </span>
             
           
            </div>
)
}