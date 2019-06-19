import React, { Component } from "react";
import WeatherDay from "./WeatherDay";
import WeatherDetail from "./WeatherDetail";
import "./App.css";
class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div id="wrapper">
        <h1 className="ui center white aligned header"> Weather App </h1>
        <div className="ui container horizontal segments">
          <WeatherDay />
        </div>
        <WeatherDetail />
      </div>
    );
  }
}

export default App;
