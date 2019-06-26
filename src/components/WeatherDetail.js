import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchWeather,
  fetchLocation,
  getLocalWeather,
  onDaySelect
} from "../actions";
class WeatherDetail extends Component {
  componentDidUpdate() {}

  render() {
    const renderDays = this.props.weather.selectedDay;
    const weather = this.props.weather.weatherData;
    if (!this.props.weather.selectedDay) {
      return (
        <div className="ui container segment papaya">
          To seedetailed forcast please click on a day...
        </div>
      );
    }
    const dayWeather = weather.filter(e => {
      return e.number === renderDays[0];
    });
    const nightWeather = weather.filter(e => {
      return e.number === renderDays[1];
    });
    return (
      <div className="details">
        <div className="ui segments ">
          <div className="ui segment papaya">
            <h2>{dayWeather[0].name}</h2>
            <img
              className="ui centered rounded small image"
              src={dayWeather[0].icon}
              alt="icon"
            />

            <h5 className={"detailForecast"}>
              {dayWeather[0].detailedForecast}
            </h5>
          </div>
          <div className="ui secondary segment night ">
            <h2>{nightWeather[0].name}</h2>
            <img
              className="ui centered rounded small image"
              src={nightWeather[0].icon}
              alt="icon"
            />

            <h5 className={"detailForecast"}>
              {nightWeather[0].detailedForecast}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weatherReducer
  };
};

export default connect(
  mapStateToProps,
  { fetchWeather, fetchLocation, getLocalWeather, onDaySelect }
)(WeatherDetail);
