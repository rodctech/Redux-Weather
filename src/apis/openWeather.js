import axios from "axios";

//const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
//TO DO HIDE THE API KEY.

export default axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5'
});






 // NEED TO GET LAT AND LONG FROM STORE , WILL NEED TO EXPORT PAYLOAD RESPONSE
/*mapStateToProps= (state) => {
    return{ response: state.response}
};*/

//export default connect(mapStateToProps, {response: response })(openWeather);
