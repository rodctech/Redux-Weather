import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchWeather,
	fetchLocation,
	getLocalWeather,
	onDaySelect
} from "../actions";
class WeatherDetail extends Component {
	componentDidUpdate() {
		console.log("I Updated");
		// const renderDays = this.props.weather.selectedDay;
		// const weather = this.props.weather.weatherData;

		// const afternoon = weather.filter(e => {
		// 	return e.number === renderDays[0];
		// });
	}

	render() {
		if (!this.props.weather.selectedDay) {
			return (
				<div className="ui container segment">
					To seedetailed forcast please click on a day...
				</div>
			);
		}
		const weather = this.props.weather.weatherData;
		console.log(weather);

		return (
			<div className="ui container">
				<div className="ui segments">
					<div className="ui segment">
						<h2>Day</h2>
						<p style={{ paddingLeft: "1.5em" }}>
							TIME
							<span style={{ paddingLeft: "5em" }}>
								DESCRIPTION
							</span>
							<span style={{ paddingLeft: "5em" }}>HIGH</span>
							<span style={{ paddingLeft: "5em" }}>LOW</span>
						</p>
					</div>

					<div className="ui segments">
						<div className="ui segment">
							<p>
								5:00 pm
								<span style={{ paddingLeft: "5em" }}>
									Sunny
								</span>{" "}
								<span style={{ paddingLeft: "7.5em" }}>
									75˚
								</span>
								<span style={{ paddingLeft: "7.5em" }}>
									60˚
								</span>
							</p>
						</div>
						<div className="ui segment">
							<p>6:00 pm</p>
						</div>
						<div className="ui segment">
							<p>7:00 pm</p>
						</div>
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
