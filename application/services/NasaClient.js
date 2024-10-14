import axios from 'axios';
import config from '../../config/config.js';

const meteors = async (startDate, endDate) => {
    try {
        const response = await axios.get(`${config.apiUri}/neo/rest/v1/feed`, {
          params: {
            start_date: startDate,
            end_date: endDate,
            api_key: config.apiKey
          }
        });

        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error.message);
        if (error.response) {
          console.error('Response status:', error.response.status);
          console.error('Response data:', error.response.data);
        }
      }
}

export default meteors;