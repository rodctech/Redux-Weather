import axios from "axios";
//import "babel-core/polyfill"; // so I can use Promises
//import fetch from "isomorphic-fetch"; // so I can use fetch()
import weatherData from "../apis/openWeather";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_LOCATION = "FETCH_LOCATION";

export const getLocalWeather = () => async dispatch => {
  let newLocation = await fetchLocation();
  let newWeather = await fetchWeather(newLocation);

  dispatch({ type: FETCH_WEATHER, payload: newWeather });
};

export const fetchWeather = ({ lat, long }) => {
  return new Promise(async (success, error) => {
    try {
      const response = await weatherData.get(`/points/${lat},${long}`);
      const gridURL = response.data.properties.forecast;
      const forecast = await axios.get(gridURL);

      success(forecast.data.properties.periods);
    } catch (err) {
      error(err);
    }
  });
};

export const fetchLocation = () => {
  return new Promise(async (success, error) => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const positionResponse = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        };

        success(positionResponse);
      },
      err => {
        error(err);
      }
    );
  });
};
