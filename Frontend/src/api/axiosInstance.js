import axios from "axios";

export default axios.create({
  baseURL: "https://travelbackend-4ufh.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
