import React, { Component } from "react";
import { connect } from "react-redux";
import {
    fetchWeather,
    fetchLocation,
    getLocalWeather,
    onDaySelect
} from "../actions";

class WeatherDay extends Component {
    componentDidMount() {
        this.props.getLocalWeather();
    }

    render() {
        const weather = this.props.weather.weatherData;
        const dayWeather = weather.filter(e => {
            return e.isDaytime === true;
        });

        return dayWeather.map(e => (
            <div
                className="ui segment"
                key={e.endTime}
                onClick={() => onDaySelect(e.number)}
            >
                <div className="ui center grey aligned header">{e.name}</div>
                <div className="ui center grey aligned header">
                    <i className="sun icon" />
                </div>

                <div className="ui center grey aligned sub header">
                    Min:75° Max:80°
                </div>
            </div>
        ));
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
)(WeatherDay);
