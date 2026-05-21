import axios from "axios";

const DEFAULT_API_URL = "https://artes-fondo-cano.onrender.com/api/v1";
const envApiUrl = import.meta.env.VITE_API_URL?.trim();
const apiBaseUrl = import.meta.env.DEV
  ? "/api/v1"
  : envApiUrl || DEFAULT_API_URL;

export const api = axios.create({
  baseURL: apiBaseUrl,
});

export const setToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};