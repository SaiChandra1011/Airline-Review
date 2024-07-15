import axios from "axios";

const AirlineReviewer = axios.create({
    baseURL: "http://localhost:3006/api/v1/airlines",
});

export default AirlineReviewer;