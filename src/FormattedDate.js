import React from "react";

export default function FormattedDate(props){
let days = ["Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"];
let day = days[props.date.getDay()];
let hours = props.date.getHours();
let minutes = props.date.getMinutes();
if (minutes < 10) {
minutes = `0${minutes}`
};
let months = ["JAN","FEB", "MAR","APR","MAY", "JUN","JUL","AUG", "SEPT", "OCT","NOV","DEC"];
let month = months[props.date.getMonth()];
let dateOfMonth = props.date.getDate();

    return <div>
        <li>
        {day} / {month} {dateOfMonth}
        </li>
         <li>
        {hours}:{minutes}
        </li> 
        </div>
}