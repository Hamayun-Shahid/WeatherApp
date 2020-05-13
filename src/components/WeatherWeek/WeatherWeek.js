import React from "react";
import "./WeatherWeek.css";
import WeatherShow from "../WeatherShow/WeatherShow";
import WeatherToday from "../WeatherToday/WeatherToday";

// this component for the list of days of week other than today

const WeatherWeek = ({ weathers, city }) => {
  // for seperate the today from other week days it will give us days without today
  const ListWeather = weathers.slice(1);
  return (
    <div>
      <WeatherToday
        city={city}
        min={weathers[0].temp.min}
        max={weathers[0].temp.max}
        dt={weathers[0].dt * 1000}
        main={weathers[0].weather[0].description}
        icon={weathers[0].weather[0].icon}
      />
      <div className="WeatherWeekMain">
        {ListWeather.map(({ dt, temp, weather }, index) => (
          <div key={index}>
            <WeatherShow
              min={Math.round(temp.min)}
              max={Math.round(temp.max)}
              dt={dt * 1000}
              main={weather[0].description}
              icon={weather[0].icon}
            />
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default WeatherWeek;
