import axios from 'axios';

export const api = () => {
  const axiosInstance = axios.create({
    baseURL: 'https://e-store-254314.firebaseio.com',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return axiosInstance;
};
