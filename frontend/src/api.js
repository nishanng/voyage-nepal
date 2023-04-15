import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001', // Change the port to 5000
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  search(query) {
    return apiClient.post('/query', { query }); // Change the method to post and pass the query as an object
  },
};
