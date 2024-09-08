import { apiCall } from "../../api/apicall.js";
import { errorMessage } from "../../ui/errorMessage.js";
import { createMovies } from "../../ui/createMovies.js";
import { randomiseArray } from "../../utils/randomiseArray.js";

const movieFront = document.querySelector("#movieFront"); // Added selector for movieFront

export async function displayMoviesFront() {
  try {
    const moviesResponse = await apiCall();
    const movies = moviesResponse.data;

    if (movieFront) {
      const randomisedMovies = randomiseArray(movies);
      createMovies(randomisedMovies.slice(0, 6), movieFront);
    }
  } catch (error) {
    if (movieFront) {
      errorMessage("#movieFront", "error", error.message);
    }
  }
}