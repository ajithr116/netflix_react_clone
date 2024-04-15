import axios from 'axios';
import {baseURL} from './constents/constents.js'

const instance = axios.create({
    baseURL: baseURL,
  });

export default instance;