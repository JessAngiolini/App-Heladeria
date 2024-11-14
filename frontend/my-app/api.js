import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.0.161:3000",  
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (userData) => {
  try {
    const response = await API.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await API.post("/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const recoverPassword = async (email) => {
  try {
    const response = await API.post('/recover-password', { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}