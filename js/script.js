import { displayMoviesBrowse } from "./handlers/posts/displayAll.js";
import { displayMoviesFront } from "./handlers/posts/displayMovies.js";
import { displayDetails } from "./handlers/posts/displayDetails.js";
import { displayCart } from "./handlers/cart/displayCart.js";
function router() {
  const { pathname } = window.location;

  switch (pathname) {
    case "/":
    case "/index.html":
      displayMoviesFront();
      break;
    case "/browse.html":
      displayMoviesBrowse();
      break;
    case "/products/":
      displayDetails();
      break;
    case "/checkout/":
      displayMoviesFront();
      displayCart();
      break;
    case "/checkout/confirmation/":
      displayMoviesFront();
      break;
  }
}
router();
