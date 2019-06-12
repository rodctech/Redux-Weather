import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather, fetchLocation } from "../actions";

class WeatherDay extends Component {
    componentDidMount() {
        this.serialChaining();
        //this.props.fetchLocation();
        //this.props.doEverything();
    }

    componentDidUpdate() {}

    doJob(x, sec) {
        return new Promise(resolve => {
            console.log("Start: " + x);
            setTimeout(() => {
                console.log("End: " + x);
                resolve(x);
            }, sec * 1000);
        });
    }

    async serialChaining() {
        let result1 = await this.props.fetchLocation();

        let result2 = await this.doJob(1, 3);

        let result3 = await this.doJob(2, 3);

        let lat = this.props.weather.locationData[0];
        let long = this.props.weather.locationData[1];
        let result4 = await this.props.fetchWeather(lat, long);

        let finalResult = result1 + result2 + result3 + result4;
        return finalResult;
    }

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
    { fetchWeather, fetchLocation }
)(WeatherDay);
