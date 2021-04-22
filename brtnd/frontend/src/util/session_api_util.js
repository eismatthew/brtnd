import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const userSignup = (userData) =>
  axios.post("/api/users/signup", userData);

export const userLogin = (userData) => axios.post("/api/users/login", userData);

export const bartenderSignup = (userData) =>
  axios.post("/api/bartender/signup", userData);

export const bartenderLogin = (userData) =>
  axios.post("/api/bartender/login", userData);
