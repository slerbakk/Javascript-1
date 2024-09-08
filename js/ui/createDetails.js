import { isIdInCart } from "../utils/cart.js";
export function createDetails(movie, container) {
  const { title, image, description, price, genre, rating, released } =
    movie.data;

  container.innerHTML = "";

  const detailsContent = document.createElement("div");
  detailsContent.classList.add("details-content");

  const img = document.createElement("img");
  img.src = image.url;
  img.alt = title;
  detailsContent.appendChild(img);

  const textContent = document.createElement("div");
  textContent.classList.add("text-content");

  const heading = document.createElement("h1");
  heading.textContent = title;
  textContent.appendChild(heading);

  const info = document.createElement("p");
  info.classList.add("info");
  info.innerHTML = `
    Price: ${price}<br>
    Genre: ${genre}<br>
    Rating: ${rating}<br>
    Released: ${released}
  `;
  textContent.appendChild(info);
  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.classList.add("description");
  descriptionParagraph.textContent = description;
  textContent.appendChild(descriptionParagraph);

  const cartLink = document.createElement("a");
  cartLink.id = "cart-icons";

  const cartIcon = document.createElement("i");
  cartIcon.classList.add("fa-solid", "fa-cart-plus");
  cartIcon.dataset.title = title;
  cartIcon.dataset.price = price;
  cartLink.appendChild(cartIcon);
  textContent.appendChild(cartLink);
  detailsContent.appendChild(textContent);
  container.appendChild(detailsContent);

  if (isIdInCart(title)) {
    cartIcon.classList.add("fa-cart-shopping", "green");
  } else {
    cartIcon.classList.add("fa-cart-plus");
  }
}
