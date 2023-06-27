import React, {useState} from "react";
import axios from "axios";

import "./Weather.css";
import DataWeather from "./DataWeather";

export default function Weather (props){
  const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response){
    setWeatherData({
      ready:true,
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    })
  }
function search(){
   let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event){
event.preventDefault();
search(city);
  }
  function handleCityChange(event){
setCity(event.target.value)
  }

  if (weatherData.ready){
	return (<div className="Weather">
    <form className="mb-2" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
    <input type="search" placeholder="enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}></input>
   </div>
    <div className="col-3">
    <input type="submit" value="Search" className="btn btn-dark w-100"/>
    </div>
    </div>
</form>
<DataWeather data={weatherData}/>
    
    </div>);
  } else {

 search();
  return "Loading..."
}

}