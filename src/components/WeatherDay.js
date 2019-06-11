import React, { useEffect, useState } from "react";
import { fetchWeather, getLocation } from "../actions";

const WeatherDay = () => {
  const [weather, setWeather] = useState([]);
  console.log("weather", weather);

  useEffect(() => {
    (async () => {
      let newLocation = await getLocation();
      let newWeather = await fetchWeather(newLocation);
      setWeather([...newWeather]);
    })();
  }, []);

  return (
    <div className="ui  container">
      {weather[0] &&
        weather.map(e => (
          <div className="ui segment" key={e.endTime}>
            <div className="ui center grey aligned header">{e.name}</div>
            <div className="ui center aligned header">
              <img src={e.icon} alt="forecast image" />
            </div>
            <p className="forecast">{e.detailedForecast}</p>
          </div>
        ))}
    </div>
  );
};

export default WeatherDay;

