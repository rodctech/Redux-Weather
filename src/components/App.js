import React, { Component } from "react";
import { connect } from "react-redux";

import WeatherDay from "./WeatherDay";

import WeatherDetail from "./WeatherDetail";
import City from "./City";
import Spinner from "./Spinner";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <h1 className="ui center white aligned header"> Weather App </h1>
        <City />
        <div className="ui container horizontal segments">
          <WeatherDay />
        </div>
        <WeatherDetail />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    weather: state.weatherReducer
  };
};

export default connect(mapStateToProps)(App);
