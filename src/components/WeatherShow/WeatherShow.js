import React from "react";
import { weekdays } from "../../utilities/util";
import "./WeatherShow.css";
// the small shows the day stats other than today (Small card)

const WeatherShow = ({ dt, min, max, main, icon }) => {
  const date = new Date(dt);

  return (
    <div className="WeatherShowMain">
      <img
      width="200px"
      height="200px"
      alt="weather"
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <div>
        <h3 className="WeatherShowCapt">{main}</h3>
        <p>
          {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
        </p>
        <p>{weekdays[date.getDay()]}</p>
        <p>
          Min: {min}
          <span>&#8451;</span>
        </p>
        <p>
          Max: {max}
          <span>&#8451;</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherShow;
