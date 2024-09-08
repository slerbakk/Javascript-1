export function createMovies(movies, container) {
  container.innerHTML = "";
  const movieGrid = document.createElement("div");
  const baseUrl = window.location.origin;
  movieGrid.classList.add("movie-grid");

  movies.forEach((movie) => {
    const { id, title, image } = movie;
    const movieCard = document.createElement("a");
    movieCard.classList.add("movie");
    movieCard.href = `${baseUrl}/products/?movie=${id}`;

    const img = document.createElement("img");
    img.classList.add("poster");
    img.src = image.url;
    img.alt = title;

    movieCard.append(img);
    movieGrid.append(movieCard);
    container.append(movieGrid);
  });
}
