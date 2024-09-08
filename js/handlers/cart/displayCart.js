import { getCart } from "../../utils/cart.js";
import { createCartHtml } from "../../ui/cart/createCartHtml.js";
export function displayCart() {
  const cart = getCart();
  const container = document.querySelector("#cart-container");
  createCartHtml(cart, container);
}
