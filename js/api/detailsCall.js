import { apiUrl } from "../constants/api.js";
export async function detailsCall(id) {
  const url = `${apiUrl}/${id}`;
  const response = await fetch(url);
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  throw new Error("Error fetching movie");
}
