import axios from 'axios';
import { API_URL } from '../data/constants';

const config = axios.create({
  baseURL: API_URL
})


export default config;