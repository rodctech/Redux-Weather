import weatherData from "../apis/openWeather";
import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = ({ lat, long }) => {
  return new Promise(async (res, rej) => {
    try {
      const response = await weatherData.get(`/points/${lat},${long}`);
      const gridURL = response.data.properties.forecast;
      const forecast = await axios.get(gridURL);
      res(forecast.data.properties.periods);
    } catch (err) {
      rej(err);
    }
  });
};

export const getLocation = () => {
  return new Promise(async (res, rej) => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        const positionRes = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        };
        console.log("Lat:", positionRes.lat, "Long:", positionRes.long);
        res(positionRes);
      },
      err => {
        rej(err);
      }
    );
  });
};
