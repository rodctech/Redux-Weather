import axios from "axios";
import weatherData from "../apis/openWeather";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const SELECTED_DAY = "SELECTED_DAY";

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

export const onDaySelect = day => {
  let selectedDays = [day, day + 1];
  console.log(selectedDays);

  //setTimeout(1.4);

  // await dispatch({ type: SELECTED_DAY, payload: selectedDays });
};

export const setDaySelect = day => async dispatch => {
  console.log("Running dispatch");

  let newSelectedDays = await onDaySelect(day);

  dispatch({ type: SELECTED_DAY, payload: newSelectedDays });
};
