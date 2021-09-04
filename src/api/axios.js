import axios from "axios";

export const baseURL = "http://localhost:8080";

// const myAxios = axios.create({
//   baseURL: 'http://34.70.63.74:8080'
// });

const myAxios = axios.create({
  baseURL: baseURL,
});

export default myAxios;
