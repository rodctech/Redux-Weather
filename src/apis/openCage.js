import axios from "axios";

export default axios.create({
	baseURL: "https://api.opencagedata.com/geocode/v1/json"
});
