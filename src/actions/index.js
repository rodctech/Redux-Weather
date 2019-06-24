import axios from "axios";
import weatherData from "../apis/openWeather";
import addressData from "../apis/openCage";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const SEARCH = "SEARCH";
export const FETCH_LOCATION = "FETCH_LOCATION";
export const SELECTED_DAY = "SELECTED_DAY";

export const getLocalWeather = () => async dispatch => {
  let newLocation = await fetchLocation();
  let newWeather = await fetchWeather(newLocation);
  let currentCity = await fetchCurrentCity(newLocation);

  dispatch({ type: FETCH_WEATHER, payload: newWeather });
  dispatch({ type: FETCH_LOCATION, payload: currentCity });
};

export const getInputWeather = latLng => async dispatch => {
  //  let newLocation = await fetchLocation();
  console.log(latLng);
  let newLocation = latLng;
  let newWeather = await fetchWeather(newLocation);
  let currentCity = await fetchCurrentCity(newLocation);

  dispatch({ type: FETCH_WEATHER, payload: newWeather });
  dispatch({ type: FETCH_LOCATION, payload: currentCity });
};

export const fetchWeather = ({ lat, lng }) => {
  return new Promise(async (success, error) => {
    try {
      //  console.log("Lat ", lat, " Long ", lng);

      const response = await weatherData.get(`/points/${lat},${lng}`);
      const gridURL = response.data.properties.forecast;
      //console.log(response.data.properties);
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
          lng: position.coords.longitude
        };

        success(positionResponse);
      },
      err => {
        error(err);
      }
    );
  });
};

export const fetchCurrentCity = ({ lat, lng }) => {
  return new Promise(async (success, error) => {
    try {
      const response = await addressData.get(
        `?q=${lat}+${lng}&key=bf6078b1e5eb41e38e78ea3209e0817c`
      );

      success(response.data.results[0].components);
    } catch (err) {
      error(err);
    }
  });
};

export const onDaySelect = (day, night) => async dispatch => {
  let selectedDay = await [day, night];
  dispatch({ type: SELECTED_DAY, payload: selectedDay });
};
