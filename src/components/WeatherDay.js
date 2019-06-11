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
    <div className="ui segment">
      <div className="ui center grey aligned header">TheDay</div>
      <div className="ui center grey aligned header">
        <i className="sun icon" />
      </div>
      {weather[0] &&
        weather.map(e => (
          <div key={e.endTime}>
            {e.name}: {e.detailedForecast}
          </div>
        ))}
      <div className="ui center grey aligned sub header">Min:75° Max:80°</div>
    </div>
  );
};

export default WeatherDay;
