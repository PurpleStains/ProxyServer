import axios from 'axios';
import config from '../config/config.js';

export default async function meteors(startDate, endDate) {
  const response = await axios.get(`${config.apiUri}/neo/rest/v1/feed`, {
    params: {
      start_date: startDate,
      end_date: endDate,
      api_key: config.apiKey
    }
  });

  return response.data;
}