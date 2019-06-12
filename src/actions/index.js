import weatherData from "../apis/openWeather";
import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const FETCH_LOCATION = "FETCH_LOCATION";

export const getLocation = () => async dispatch => {
  await window.navigator.geolocation.getCurrentPosition(
    position => {
      console.log("Starting getLocation");

      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      const latlong = [];

      latlong.push(lat);
      latlong.push(long);

      dispatch({ type: FETCH_LOCATION, payload: latlong });

      console.log("Location Succesfully recieved:", latlong);
    },
    err => ({ errorMessage: err.message })
  );
  // const response = await console.log(this.weatherReducer);
};

export const fetchWeather = (lat, long) => async dispatch => {
  console.log("Starting Fetch Weater");
  const response = await weatherData.get(`/points/${lat},${long}`);
  const gridURL = response.data.properties.forecast;

  const forecast = await axios.get(gridURL);
  dispatch({ type: FETCH_WEATHER, payload: forecast.data.properties.periods });
};
