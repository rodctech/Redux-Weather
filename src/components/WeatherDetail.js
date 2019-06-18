import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchWeather,
	fetchLocation,
	getLocalWeather,
	onDaySelect
} from "../actions";
class WeatherDetail extends Component {
	componentDidUpdate() {}

	render() {
		const renderDays = this.props.weather.selectedDay;
		const weather = this.props.weather.weatherData;
		if (!this.props.weather.selectedDay) {
			return (
				<div className="ui container segment">
					To seedetailed forcast please click on a day...
				</div>
			);
		}
		const dayWeather = weather.filter(e => {
			return e.number === renderDays[0];
		});
		const nightWeather = weather.filter(e => {
			return e.number === renderDays[1];
		});
		return (
			<div className="ui container">
				<div className="ui segments">
					<div className="ui segment">
						<h2>{dayWeather[0].name}</h2>
						<p>{dayWeather[0].detailedForecast}</p>
					</div>
					<div className="ui secondary segment">
						<h2>{nightWeather[0].name}</h2>

						<p>Secondary Content</p>
					</div>
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
	{ fetchWeather, fetchLocation, getLocalWeather, onDaySelect }
)(WeatherDetail);
