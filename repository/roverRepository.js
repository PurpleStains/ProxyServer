import { axiosClient } from '../config/axiosConfig.js';
import config from '../config/config.js';

export default function rovers(api_key) {
    return axiosClient.get('/mars-photos/api/v1/rovers/curiosity/photos', {
      params: {
        sol: config.sol,
        page: config.page,
        api_key: api_key
      }
    })
      .then(response => {
        return response.data.photos
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }