import React from "react";
import WeatherDay from "./WeatherDay";

const days = ['Mon', 'Tues','Wed'];

const WeatherList = ({ days, onDaySelect }) => {
  const renderedDays = days.map(day => {
    return <WeatherDay onDaySelect={onDaySelect} day={day} />;
  });

  return <div className="ui container horizontal segments">{renderedDays}</div>;
};

export default WeatherList;
