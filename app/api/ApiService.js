import axios from "axios";

export const authServices = axios.create({
  baseURL: process.env.NEXT_APP_API_URL,
});


