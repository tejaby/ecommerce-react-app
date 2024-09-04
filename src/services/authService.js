import axios from "axios";

const url = "http://localhost:3000/api/auth/";

export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${url}login`, user);
    return response.data;
  } catch (err) {
    throw err.response;
  }
};

export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${url}register`, data);
    return response.data;
  } catch (err) {
    throw err.response;
  }
};
