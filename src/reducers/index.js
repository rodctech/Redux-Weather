import { combineReducers } from "redux";

const weatherReducer = () => {
  return "temp";
};

export default combineReducers({
  weatherReducer: weatherReducer
});
