import React, { Component } from "react";
import WeatherDay from "./WeatherDay";
import WeatherDetail from "./WeatherDetail";
class App extends Component {
  render() {
    return (
      <div>
        <h1 className="ui center aligned header"> Weather App </h1>
        <div className="ui container horizontal segments">
          <WeatherDay />
        </div>
        <WeatherDetail />
      </div>
    );
  }
}

export default App;
