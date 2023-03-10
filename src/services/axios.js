import axios from 'axios';
import { APP_ENVIRONMENT } from '../App';

export let BASE_ENDPOINT = '';

if (APP_ENVIRONMENT === 'local') {
  BASE_ENDPOINT = 'http://localhost:5003';
} else if (APP_ENVIRONMENT === 'development') {
  BASE_ENDPOINT = 'http://api.dev.twosvnserver.xyz';
} else if (APP_ENVIRONMENT === 'staging') {
  BASE_ENDPOINT = 'http://api.stg.twosvnserver.xyz';
} else if (APP_ENVIRONMENT === 'production') {
  BASE_ENDPOINT = 'http://api.twosvnserver.xyz';
}

const BASE_URL = `${BASE_ENDPOINT}/api/v1`;

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true
});
