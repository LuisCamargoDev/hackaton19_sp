import axios from "axios";

const api = axios.create({
  baseURL: "https://rsxp-hackathon.herokuapp.com/",
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
