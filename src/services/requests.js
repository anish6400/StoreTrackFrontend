// contains all the functions required to make api requests
import axios from "axios";
const apiUrl = "http://192.168.0.77:5000";
axios.defaults.baseURL = apiUrl;

export async function userLogin(email, password) {
  let response = await axios.get(`login?email=${email}&password=${password}`);
  return response;
}

export async function userSignup(fullname, email, password) {
  let response = await axios.post(
    `signup?fullname=${fullname}&email=${email}&password=${password}`
  );
  return response;
}
