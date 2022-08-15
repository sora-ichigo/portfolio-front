import axios, { AxiosRequestConfig } from "axios";

const cfg: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost:3000",
};
export const axiosClient = axios.create(cfg);
