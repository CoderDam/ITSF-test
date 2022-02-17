import axios from 'axios';

const corsProxy = 'https://cors-anywhere.herokuapp.com/';

export const api = axios.create({
  baseURL: corsProxy,
  headers: { 'Access-Control-Allow-Origin': '*' },
})

api.interceptors.request.use((config) => ({
  ...config,
  url: `${config.baseURL}${config.url}`
}));