const CART_KEY = "products";

function saveToCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function isIdInCart(title) {
  const cart = getCart();
  return cart.some((item) => item.title === title);
}

export function addToCart(title, price) {
  const newItem = { title, price };

  const cart = getCart();
  cart.push(newItem);
  saveToCart(cart);
}

export function removeFromCart(title) {
  const cart = getCart();
  const newCart = cart.filter((item) => item.title !== title);
  saveToCart(newCart);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}
