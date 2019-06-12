import { FETCH_WEATHER, FETCH_LOCATION } from "../actions";

export const weatherReducer = (
	state = { weatherData: [], locationData: [] },
	action
) => {
	switch (action.type) {
		case FETCH_WEATHER:
			return { ...state, weatherData: action.payload };
		case FETCH_LOCATION:
			return { ...state, locationData: action.payload };

		default:
			return state;
	}
};
