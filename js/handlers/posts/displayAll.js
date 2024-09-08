import { apiCall } from "../../api/apicall.js";
import { errorMessage } from "../../ui/errorMessage.js";
import { createMovies } from "../../ui/createMovies.js";
export async function displayMoviesBrowse() {
  try {
    const movieBrowse = document.querySelector("#movieBrowse");
    const categorySelect = document.querySelector("#category");

    const moviesResponse = await apiCall();
    const movies = moviesResponse.data;

    if (movieBrowse) {
      createMovies(movies, movieBrowse.querySelector(".movie-grid"));

      categorySelect.addEventListener("change", (event) => {
        const selectedGenre = event.target.value.toLowerCase();
        if (selectedGenre) {
          const filteredMovies = movies.filter(
            (movie) => movie.genre.toLowerCase() === selectedGenre
          );
          createMovies(
            filteredMovies,
            movieBrowse.querySelector(".movie-grid")
          );
        } else {
          createMovies(movies, movieBrowse.querySelector(".movie-grid"));
        }
      });
    }
  } catch (error) {
    if (movieBrowse) {
      errorMessage("#movieBrowse", "error", error.message);
    }
  }
}
