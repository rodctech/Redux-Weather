import { FETCH_WEATHER} from "../actions";

export const weatherReducer = (state= {weatherData:[]}, action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return {...state, weatherData: action.payload};

        default:
            return state;
    }
};