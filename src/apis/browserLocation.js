import {connect} from "react-redux";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";

export const getLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log('Lat:',lat, "Long:", long);
        },
        err => ({ errorMessage: err.message })
    );
};

/*   NOT NEEDED, WE MUST SET STATE HERE. PASS LAT LONG TO STORE
mapStateToProps = (state) => {
    return{
        lat: state.lat,
        long: state.long
    }
};*/

//export default connect(mapStateToProps, {lat: lat, long: long })(getLocation);