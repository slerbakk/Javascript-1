import { apiUrl } from "../constants/api.js";
export async function apiCall() {
  const response = await fetch(apiUrl);
  const movies = await response.json();
  return movies;
}
