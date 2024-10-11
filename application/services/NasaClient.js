import axios from 'axios';
import { format } from 'date-fns';
import config from '../../config/config.js';

const asteroids = async () => {
    const startDate = new Date(2024, 10, 9);
    const endDate = new Date(2024, 10, 11);

    const formattedStartDate = format(startDate, 'yyyy-MM-dd');
    const formattedEndDate = format(endDate, 'yyyy-MM-dd');

    try {
        const response = await axios.get(`${config.apiUri}/neo/rest/v1/feed`, {
          params: {
            start_date: formattedStartDate,
            end_date: formattedEndDate,
            api_key: config.apiKey
          }
        });
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        if (error.response) {
          console.error('Response status:', error.response.status);
          console.error('Response data:', error.response.data);
        }
      }
}


export default asteroids;