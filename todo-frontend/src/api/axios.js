import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/api', // ✅ match the backend port 3000
});
