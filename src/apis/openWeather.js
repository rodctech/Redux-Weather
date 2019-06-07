import axios from "axios";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";

//const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
//TO DO HIDE THE API KEY.
const theKey = '7da066e8f1118f76450059957bf8cad7';

const lat = 41;
const long = -88;

//OPEN WEATHER API CALL
export const getWeather = async () => {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${theKey}`
  );
  console.log(response.data);
};

 // NEED TO GET LAT AND LONG FROM STORE , WILL NEED TO EXPORT PAYLOAD RESPONSE
/*mapStateToProps= (state) => {
    return{ response: state.response}
};*/

//export default connect(mapStateToProps, {response: response })(openWeather);
