import {theKey, lat, long } from './constants';
import weatherData from '../apis/openWeather';

export const FETCH_WEATHER = 'FETCH_WEATHER';


    //OPEN WEATHER API CALL
    export const fetchWeather = () => async dispatch => {
        const response = await weatherData.get(
            `/forecast?lat=${lat}&lon=${long}&appid=${theKey}`
        );
        dispatch({type: "FETCH_WEATHER", payload: response });
        console.log(response);
    };


   /* return {
        type: FETCH_WEATHER,
        payload: response
    }*/
