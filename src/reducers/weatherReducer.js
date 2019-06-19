import { FETCH_WEATHER, FETCH_LOCATION, SELECTED_DAY } from "../actions";

export const weatherReducer = (
	state = { weatherData: [], locationData: [], selectedDay: null },
	action
) => {
	switch (action.type) {
		case FETCH_WEATHER:
			return { ...state, weatherData: action.payload };
		case FETCH_LOCATION:
			return { ...state, locationData: action.payload };
		case SELECTED_DAY:
			return { ...state, selectedDay: action.payload };

		default:
			return state;
	}
};
