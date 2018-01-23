var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

let newItem = {};

function addToCart(item) {
  newItem = item
 cart.push(new Object({[newItem]:Math.floor(Math.random()*100)}));
 console.log(`${item} has been added to your cart.`)
}

function viewCart() {
  for (let i = 0; i < cart.length; i++) {
    console.log(`${Object.keys(cart[i])} at ${cart[i].Object.keys(cart[i])}`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

addToCart('phone')
addToCart('meat')
addToCart('meat1')
console.log(Object.keys(cart[0]))
console.log(cart[0].phone)
viewCart();

console.log(cart)
