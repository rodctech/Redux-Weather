import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather, fetchLocation, getLocalWeather } from "../actions";

class WeatherDay extends Component {
    componentDidMount() {
        this.props.getLocalWeather();
    }

    componentDidUpdate() {}

    render() {
        return (
            <div className="ui segment">
                <div className="ui center grey aligned header">TheDay</div>
                <div className="ui center grey aligned header">
                    <i className="sun icon" />
                </div>

                <div className="ui center grey aligned sub header">
                    Min:75° Max:80°
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

export default connect(
    mapStateToProps,
    { fetchWeather, fetchLocation, getLocalWeather }
)(WeatherDay);
