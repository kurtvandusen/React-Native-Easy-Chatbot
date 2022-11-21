import axios from "axios";

export default axios.create({
  baseURL: "https://",
  headers: {
    "Content-type": "application/json"
  }
});