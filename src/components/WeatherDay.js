import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather, getLocation } from "../actions";

class WeatherDay extends Component {
    componentDidMount() {
        this.getLocationWeather();
    }

    async getLocationWeather() {
        await this.doJob(1, 2);

        await this.props.getLocation();
        //     await this.props.fetchWeather();
    }

    doJob(x, sec) {
        return new Promise(resolve => {
            console.log("Start: " + x);
            setTimeout(() => {
                console.log("End: " + x);
                resolve(x);
            }, sec * 1000);
        });
    }

    // async serialChaining() {
    //     let result1 = await this.getLocation();
    //     let result2 = await this.doJob(2, 2);
    //     let result3 = await this.doJob(3, 3);

    //     let finalResult = result1 + result2 + result3;
    //     console.log(finalResult);
    //     return finalResult;
    // }

    render() {
        return (
            <div className="ui segment">
                <div> Current Lat and Long {}</div>
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
        weather: state.response
    };
};

export default connect(
    mapStateToProps,
    { fetchWeather, getLocation }
)(WeatherDay);
