import axios from "axios";

// const ApiPort = process.env.API_PORT;
// const ApiUrl = process.env.API_URL;

const api = axios.create({
  baseURL: `http://localhost:3000/boletos/`,
});

export default api;
