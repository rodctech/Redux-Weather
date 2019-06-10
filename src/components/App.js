import React, { Component } from "react";
import WeatherDay from "./WeatherDay";
import {getLocation} from "../actions/index";

class App extends Component {


  componentDidMount() {
     // this.getLocation();
     // getWeather();
  }

    render() {
    return (
      <div>
        <h1 className="ui center aligned header"> Weather App </h1>
        <div className="ui container horizontal segments">
          <WeatherDay />
        </div>
      </div>
    );
  }
}

export default (App);
