import React from "react";

export default function WeatherForecastDay(props){

function day(){
  let date = new Date(props.data.dt * 1000)
  let days = ["Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"];
  let day = date.getDay();
  return days[day];
}

  function maxTemperature(){
    let temperature = Math.round(props.data.temp.max)
    return `${temperature}º`;
  }

  function minTemperature(){
    let temperature = Math.round(props.data.temp.min)
    return `${temperature}º`;
  }

return (
<div className="WeatherForecastDay">

              <div className="Forecast-day">{day()}</div>
             <div className="Forecast-icon"> <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="icon"/></div>
              <span className="Forecast-temperature-max">{maxTemperature()} </span>
              <span className="Forecast-temperature-min">{minTemperature()}</span>
           
            </div>
)
}