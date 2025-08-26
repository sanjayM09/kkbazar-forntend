import axios from 'axios';
const baseURLs = {
  // development: 'http://192.168.29.106:8060/', // API server url (Development)
  // development: 'http://192.168.0.:8081/', // API server url (Development)
  production: 'https://kkbazar-backend.onrender.com', // API server url (Production)

  //-----------------Development-------------------------
  // production: 'https://kkbazar.dev.api.ideauxbill.in/', // API server url (Development)
  // staging: 'https://dev.justclickin.in/',  // API server url (Staging)

  //-----------------Production-------------------------
  // production: 'https://api.justclickin.in/', // API server url (Production)
  // staging: 'https://justclickin.in/',  // API server url (Staging)
};

// const environment = process.env.NODE_ENV || 'development';
const environment = 'production';
const baseRequest = axios.create({
  baseURL: baseURLs[environment],     // Sanjay
  // headers: {
  //   'X-Requested-With': 'XMLHttpRequest',
  // },
});
export default baseRequest;
export const base = baseURLs[environment];     // Sanjay
