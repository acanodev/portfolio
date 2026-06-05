import axios from "axios";
import { BASE_URL } from "../consts/consts";

export const axiosConnection = axios.create({
  baseURL: BASE_URL,
});