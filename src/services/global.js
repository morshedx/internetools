import axios from 'axios';

const getClientIp = () => {
  return axios.get('https://api.ipify.org?format=json');
};

export { getClientIp };
