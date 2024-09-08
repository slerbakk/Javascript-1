import { addToCart, isIdInCart, removeFromCart } from "../../utils/cart.js";
export function handleCartIconClick() {
  const cartLink = document.querySelector("#cart-icons");

  if (cartLink) {
    cartLink.addEventListener("click", respondToCartIconClick);
  }

  function respondToCartIconClick(event) {
    const cartIcon = event.target;
    const { title, price } = cartIcon.dataset;

    if (isIdInCart(title)) {
      removeFromCart(title);
      cartIcon.classList.add("fa-cart-plus");
      cartIcon.classList.remove("fa-cart-shopping", "green");
    } else {
      addToCart(title, price);
      cartIcon.classList.remove("fa-cart-plus");
      cartIcon.classList.add("fa-cart-shopping", "green");
    }
  }
}
