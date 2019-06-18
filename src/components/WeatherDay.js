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
    componentDidUpdate() {}

    render() {
        const weather = this.props.weather.weatherData;
        const dayWeather = weather.filter(e => {
            return e.isDaytime === true;
        });

        return dayWeather.map(e => {
            return (
                <div
                    className="ui segment"
                    key={e.startTime}
                    onClick={() =>
                        this.props.onDaySelect(e.number, e.number + 1)
                    }
                >
                    <div className="ui center aligned sub header">
                        {e.name}
                    </div>
                    <div className="ui center aligned header">
                        <div className="ui center aligned sub header">
                            <img className={"ui mini circular image" } src={e.icon} alt="icon" />
                        </div>
                        {e.temperature}
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
