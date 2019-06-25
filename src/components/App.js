import React from "react";
import { connect } from "react-redux";
import WeatherDay from "./WeatherDay";
import WeatherDetail from "./WeatherDetail";
import SearchInput from "./SearchInput";
import City from "./City";

import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <div className="ui container">
          <h1 className="ui center white aligned header"> Weather App </h1>
          <SearchInput />
          <City />

          <div className="ui container horizontal segments">
            <WeatherDay />
          </div>
          <WeatherDetail />
        </div>
        <div id="footer">
          {" "}
          <p className="love">
            Made with{" "}
            <span role="img" aria-label="Heart">
              ❤️
            </span>{" "}
            in Chicago
          </p>
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

export default connect(mapStateToProps)(App);
