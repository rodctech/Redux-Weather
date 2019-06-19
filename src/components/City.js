import React from "react";
import { connect } from "react-redux";
import Spinner from "./Spinner";
class City extends React.Component {
	render() {
		// if (this.props.locationData === undefined) {
		// 	return (
		// 		<div className="spinner">
		// 			<Spinner />
		// 		</div>
		// 	);
		// }
		console.log(this.props.weather);
		return (
			<div className="white">
				Currently Displaying Weather For:
				<br />
				{this.props.weather.locationData.city},{" "}
				{this.props.weather.locationData.state_code}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		weather: state.weatherReducer
	};
};
export default connect(mapStateToProps)(City);
