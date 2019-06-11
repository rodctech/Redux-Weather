import React, { Component } from "react";
import WeatherDay from "./WeatherDay";
//import {getLocation} from "../actions/index";

class App extends Component {
	render() {
		return (
			<div>
				<h1 className="ui center aligned header"> Weather App </h1>
				<div className="ui raised very padded text container segment">
					<WeatherDay />
				</div>
			</div>
		);
	}
}

export default App;
