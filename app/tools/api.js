import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mocki.io/v1/464b33a1-3146-4791-917b-b753ba1320bf',
  timeout: 5000, // Timeout if necessary
  header: {
    'ContentType': 'program/json',
    // Add all custom headers here
  },
});

export const fetchData = async ( url , options = {}) => { 
  try {
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};