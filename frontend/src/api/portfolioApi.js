import axios from "axios";

const api = axios.create({
  baseURL: "https://graceportfolio-backend.onrender.com/api/",
});

export default api;