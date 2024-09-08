import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Change to your backend URL in production
});

export default instance;