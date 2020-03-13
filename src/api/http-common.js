// для запросов по https

// пример использования

//import axios from "axios";
// import {
//   cacheAdapterEnhancer,
//   throttleAdapterEnhancer
// } from "axios-extensions";

// env - данные берутся с файлика .env

//пример
// VUE_APP_I18N_LOCALE=ru
// VUE_APP_I18N_FALLBACK_LOCALE=ru
// VUE_APP_API_ADDRESS=https://google.com/api

// const API =
//     process.env.NODE_ENV !== "production"
//         ? "/api"
//         : process.env.VUE_APP_API_ADDRESS;

// Common Base Instance

// export default axios.create({
//   adapter: throttleAdapterEnhancer(
//       cacheAdapterEnhancer(axios.defaults.adapter)
//   ),
//   // withCredentials: true,
//   baseURL: API,
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     "api-version": "1.7"
//     // "Access-Control-Allow-Origin": "*"
//   },
//   params: {
//     token: "dfh;ljd;hkjdlfkjhldkjh;lkdjfh",
//     platform: "js",
//     uuid: 1536304442
//   }
// });


