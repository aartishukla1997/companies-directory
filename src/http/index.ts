import axios from "axios";

const api = axios.create({
  baseURL: "https://mocki.io/v1/", // example API
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;