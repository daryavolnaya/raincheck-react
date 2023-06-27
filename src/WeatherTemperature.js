import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    };

    function showCelcius(event){
        event.preventDefault();
        setUnit("celsius")
    }

    function fahrenheit(){
        return (props.celsius *9) / 5 +32;
    }
    if (unit === "celsius") {
    return (
        <div>
            <li >
       <span className="temperature">{props.celsius}</span>
       <span className="unit"> ºC | 
       <a href="/" onClick={showFahrenheit}>ºF</a></span>
        </li>
        </div>
    )
    } else {
        return (
        <div>
            <li >
       <span className="temperature">{Math.round(fahrenheit())}</span>
       <span className="unit">  <a href="/" onClick={showCelcius}>ºC</a> | 
      ºF</span>
        </li>
        </div>
    )
    }
}