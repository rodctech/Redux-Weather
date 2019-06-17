import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchWeather,
	fetchLocation,
	getLocalWeather,
	onDaySelect
} from "../actions";
class WeatherDetail extends Component {
	render() {
		if (!this.props.weather.selectedDay) {
			return (
				<div className="ui container segment">
					To see hourly forcast please click on a day...
				</div>
			);
		}
		console.log(this.props);
		return <div className="ui container">Hello</div>;
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
)(WeatherDetail);
