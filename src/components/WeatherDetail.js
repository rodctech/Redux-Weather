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
        <div className="ui container segment">
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
      <div className="ui container">
        <div className="ui segments">
          <div className="ui segment">
            <img
              className="ui centered small circular image"
              src={dayWeather[0].icon}
              alt="icon"
            />
            <h2>{dayWeather[0].name}</h2>
            <p>Description: {dayWeather[0].shortForecast}</p>
            <p>Temperature: {dayWeather[0].temperature} </p>
            <p>Wind Speed: {dayWeather[0].windSpeed}</p>
          </div>
          <div className="ui secondary segment">
            <img
              className="ui centered small circular image"
              src={nightWeather[0].icon}
              alt="icon"
            />
            <h2>{nightWeather[0].name}</h2>
            <p>Description: {nightWeather[0].shortForecast}</p>
            <p>Temperature: {nightWeather[0].temperature} </p>
            <p>Wind Speed: {nightWeather[0].windSpeed}</p>
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
