import React, { useState, useEffect } from "react";
import "./App.css";
import InputHandler from "./components/InputHandler/InputHandler";
import useFetch from "./hooks/useFetch";
import WeatherWeek from "./components/WeatherWeek/WeatherWeek";

// For Background Image Change go to App.CSS file

function App() {
  const {data, apiError, waiting, setApiUrl } = useFetch();

  useEffect(() => {
    setApiUrl(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${localCity}&lang=se&cnt=6&appId=0ef3791cdd604bb0d202c7c6071c871a&units=metric`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // for city that we have to set on Input change
  const [localCity, setLocalCity] = useState("Stockholm");
  //The City we have to show on big  card
  const [city, setCity] = useState("Stockholm");

  const getContent = () => {
    if (apiError) return <h2>Hittades inte!</h2>;
    if (!data && waiting) return <h2>Hämtar...</h2>;
    if (!data) return null;
    return <WeatherWeek weathers={data.list} city={city.toLocaleLowerCase()} />;
  };

  return (
    <div className="App">
        <InputHandler
          city={localCity}
          setCity={setLocalCity}
          onSelectButtonClick={() => {
            setCity(localCity);
            setApiUrl(
              `http://api.openweathermap.org/data/2.5/forecast/daily?q=${localCity}&lang=se&cnt=6&appId=0ef3791cdd604bb0d202c7c6071c871a&units=metric`
            );
          }}
        />
        {getContent()}
    </div>
  );
}

export default App;
