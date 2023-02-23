import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = '';

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 4000;

axiosClient.defaults.withCredentials = true;

export function getRequest(URL) {
  return axiosClient.get(`${URL}`).then(response => response);
}