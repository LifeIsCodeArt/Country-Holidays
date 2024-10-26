import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await api(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
