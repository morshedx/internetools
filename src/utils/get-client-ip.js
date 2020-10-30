import axios from 'axios';

const getClientIp = async () => {
  axios
    .get('https://api.ipify.org?format=json')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
export default getClientIp;
