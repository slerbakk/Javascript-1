import { clearCart } from "../../utils/cart.js";
import { errorMessage } from "../errorMessage.js";
export function createCartHtml(cart, container) {
  if (cart.length === 0) {
    return errorMessage(container, "warning ", "Your cart is empty!");
  }

  const totalItems = document.createElement("p");
  totalItems.textContent = `Total movies: ${cart.length}`;
  container.append(totalItems);

  let totalPrice = 0;

  cart.forEach((cartItem) => {
    const { title, price } = cartItem;
    const cartContainer = document.createElement("div");
    cartContainer.classList.add("cart-item");

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    const priceElement = document.createElement("p");
    priceElement.textContent = `$${price}`;

    cartContainer.append(titleElement, priceElement);
    container.append(cartContainer);
    totalPrice += parseFloat(price);
  });

  const totalPriceElement = document.createElement("p");
  totalPriceElement.textContent = `Total price: $${totalPrice.toFixed(2)}`;
  totalPriceElement.classList.add("cart-item");
  container.append(totalPriceElement);

  const button = confirmationButton();
  container.append(button);
}

function confirmationButton() {
  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Purchase!";

  button.addEventListener("click", () => {
    clearCart();
    window.location.href = "/checkout/confirmation/";
  });
  return button;
}
