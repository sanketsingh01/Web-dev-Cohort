// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
  // Initialize items property
  this.prices = [];
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function (price) {
  this.prices.push(price);
};

// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function () {
  let TotalPrice = 0;
  for (let i = 0; i < this.prices.length; i++) {
    TotalPrice += this.prices[i];
  }
  return TotalPrice;
};

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { prices } = JSON.parse(input);
  const cart = new ShoppingCart();

  for (let price of prices) {
    cart.addItem(price);
  }

  process.stdout.write(JSON.stringify(cart.getTotalPrice()));
});
