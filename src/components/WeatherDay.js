import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "./Spinner";
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
    componentDidUpdate() {}

    render() {
        const weather = this.props.weather.weatherData;
        const dayWeather = weather.filter(e => {
            return e.isDaytime === true;
        });

        if (this.props.weather.weatherData[0] === undefined) {
            return (
                <div className="spinner">
                    <Spinner />
                </div>
            );
        }

        return dayWeather.map(e => {
            return (
                <div
                    className="ui segment papaya"
                    key={e.startTime}
                    onClick={() =>
                        this.props.onDaySelect(e.number, e.number + 1)
                    }
                >
                    <div className="ui center  aligned header">{e.name}</div>
                    <div className="ui center  aligned header">
                        <div className="ui center  aligned  header">
                            <img src={e.icon} alt="icon" />
                        </div>
                        <div className="ui center aligned  header">
                            {e.temperature}
                        </div>
                    </div>
                </div>
            );
        });
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
