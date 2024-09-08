const url = "https://v2.api.noroff.dev/square-eyes/";
const resultsContainer = document.querySelector("body");

async function productPage() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    let movieHtml = "";

    // Get the movie ID (or name, depending on your API) from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const movieParam = urlParams.get("movie"); // Assuming "movie" is the parameter name

    let movie;

    // Search based on ID or name (adjust based on your API)
    if (/\d+/.test(movieParam)) {
      // Check if parameter is a number (likely an ID)
      movie = results.data.find((movie) => movie.id === movieParam);
    } else {
      movie = results.data.find(
        (movie) => movie.title.toLowerCase() === movieParam.toLowerCase()
      ); // Case-insensitive title search
    }

    if (movie) {
      movieHtml += `
        <div class="product-container">
          <div class="poster">
            <img class="poster" src="${movie.image.url}" alt="${movie.title}">
          </div>
          <div class="info">
            <h1>${movie.title}</h1>
        
            <div class="values">
            Genre: <span id="value">${movie.genre}</span>
            
            Rating: <span id="value">${movie.rating}</span>
            
            Released: <span id="value">${movie.released}</span>
            
            Price: <span id="value">${movie.price}</span>
            </div>
            <div class="description">${movie.description}</div>
            
            <button class="buy">Add to cart</button>
            <button class="buy">Checkout</button>
          </div>
        </div>
      `;
      document.title = movie.title;
    } else {
      movieHtml += `Movie not found: "${movie.title}".`;
    }

    resultsContainer.innerHTML = movieHtml;
  } catch (error) {
    console.error(error);
    resultsContainer.innerHTML = error;
  }
}

productPage();
