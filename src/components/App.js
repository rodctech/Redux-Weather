import React, { Component } from "react";
import WeatherDay from "./WeatherDay";
import {getLocation} from "../apis/browserLocation";
//import {getWeather} from "../apis/openWeather";

class App extends Component {


  componentDidMount() {
      getLocation();
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
