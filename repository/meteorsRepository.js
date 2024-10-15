import { axiosClient } from '../config/axiosConfig.js'
import config from '../config/config.js'

export default function meteors(startDate, endDate) {
  return axiosClient.get('/neo/rest/v1/feed', {
    params: {
      start_date: startDate,
      end_date: endDate,
      api_key: config.apiKey
    }
  })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error.response.data);
    });
}