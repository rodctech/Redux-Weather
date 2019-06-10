import React, { Component } from "react";
import {connect} from "react-redux";
import {fetchWeather, getLocation} from "../actions";

class WeatherDay extends Component {
    componentDidMount() {
        this.props.getLocation();
        //this.props.fetchWeather();
    }
    componentDidUpdate() {
        this.props.fetchWeather();
    }
    render() {
    return (
      <div className="ui segment">
        <div className="ui center grey aligned header">TheDay</div>
        <div className="ui center grey aligned header">
          <i className="sun icon" />
        </div>

        <div className="ui center grey aligned sub header">Min:75° Max:80°</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        weather: state.response
    };
};

export default connect(mapStateToProps, { fetchWeather, getLocation})(WeatherDay);
