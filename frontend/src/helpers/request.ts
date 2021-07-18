import axios from 'axios';
import enviroment from '../enviroments/enviroment.json';

axios.defaults.baseURL = enviroment.apiUrl;

export const getApi = (url: string) => axios.get(url);

export const postApi = (url: string, data: any) => axios.post(url, data);
