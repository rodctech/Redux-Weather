import weatherData from "../apis/openWeather";
import axios from 'axios';

const lat = 31;
const long = -88;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = () => async dispatch => {
   // const coordinates = getLocation();
  //  console.log('Coords',coordinates);

    const response = await weatherData.get(
        `/points/${lat},${long}`
    );
    const gridURL =response.data.properties.forecast;

    const forecast = await axios.get(gridURL);
    dispatch({ type: FETCH_WEATHER, payload: forecast.data.properties.periods});
};

export const getLocation = () => async dispatch => {
  await window.navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      console.log("Lat:", lat, "Long:", long);
     // const coordinates = [lat,long];
      //console.log('Coords',coordinates);
     // return coordinates;
    },
    err => ({ errorMessage: err.message })
  );
};
