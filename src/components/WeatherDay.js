import React, { Component } from "react";

class WeatherDay extends Component {


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

export default WeatherDay;
