import React from "react";
import { connect } from "react-redux";

class City extends React.Component {
  render() {
    return (
      <div className="white ">
        Currently Displaying Weather For:
        <br />
        {this.props.weather.locationData.city ||
          this.props.weather.locationData.town ||
          this.props.weather.locationData.village}
        , {this.props.weather.locationData.state_code}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    weather: state.weatherReducer
  };
};
export default connect(mapStateToProps)(City);
