import axios from 'axios';
import config from "./config.js";

export const axiosClient = axios.create({
    baseURL: config.apiUri,
});