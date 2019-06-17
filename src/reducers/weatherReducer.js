import { FETCH_WEATHER, SELECTED_DAY } from "../actions";

export const weatherReducer = (
	state = { weatherData: [], locationData: [], selectedDay: [] },
	action
) => {
	switch (action.type) {
		case FETCH_WEATHER:
			return { ...state, weatherData: action.payload };

		case SELECTED_DAY:
			return { ...state, selectedDay: action.payload };

		default:
			return state;
	}
};
