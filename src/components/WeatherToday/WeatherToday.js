import React from "react";
import "./WeatherToday.css";

import { weekdays } from "../../utilities/util";

// This Component for today's Card

const WeatherToday = ({ dt, min, max, main, icon, city }) => {
  const date = new Date(dt);

  return (
    // You can change color:"" to other
    //colors in order to change fonts color
    <div className="WeatherTodayMain">
      <div className="WeatherTodaySecond">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Weather"
        />
        <div className="WeatherTodayWidthFix">
          <h2 className="WeatherTodayCapitalize1">{city}</h2>
          <h1>
            {Math.round((min + max) / 2)}
            <span>&#8451;</span>
          </h1>
          <h5 className="WeatherTodayCapitalize">{main}</h5>
          <h4>{weekdays[date.getDay()]} </h4>
          <h4>
            {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()} <span className="simpleLeftFix">|</span>
            {new Date().toLocaleTimeString("it-IT").replace(/(.*)\D\d+/, "$1")}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WeatherToday;
