import axios from 'axios';

const API_URL = 'https://api.example.com';

export const fetchAllProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};
