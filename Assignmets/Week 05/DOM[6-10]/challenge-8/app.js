/**
 * Write your challenge solution here
 */

const products = document.querySelectorAll('.product');
const cartItems = document.getElementById('cart-items');
const emptyCart = document.querySelector('.empty-cart');
const cartTotal = document.getElementById('cart-total');

let Total = 0;
const TotalPrice = cartTotal.querySelector('h3');

function check() {
  if (cartItems.children.length === 0) {
    TotalPrice.innerText = `Total: $${0.0}`;
    cartItems.appendChild(emptyCart);
  }
}

function RemoveItem(ItemName) {
  const Item = cartItems.querySelector(`.${ItemName}`);
  const QuantityControl = Item.querySelector('.quantity-controls');
  const priceDisplay = QuantityControl.querySelector('.Price-count');
  let price = parseFloat(priceDisplay.innerText);
  Total -= price;
  TotalPrice.innerText = `Total: $${parseFloat(Total.toFixed(2))}`;
  Item.remove();
  check();
}

function addToCart(itemName, itemPrice) {
  const Item = cartItems.querySelector(`.${itemName}`);
  if (Item !== null) {
    UpdateItem(1, Item, itemPrice);
    return;
  }
  CreateItem(itemName, itemPrice);
}

function CreateItem(ItemName, ItemPrice) {
  const container = document.createElement('div');
  container.className = ItemName;
  container.classList.add('cart-item');

  const QuantityContainer = document.createElement('div');
  QuantityContainer.classList.add('quantity-controls');

  const IncreButton = document.createElement('button');
  IncreButton.innerText = '+';
  IncreButton.addEventListener('click', () => {
    const Item = cartItems.querySelector(`.${ItemName}`);
    UpdateItem(1, Item, ItemPrice);
  });

  const DecreButton = document.createElement('button');
  DecreButton.innerText = '-';
  DecreButton.addEventListener('click', function () {
    const Item = cartItems.querySelector(`.${ItemName}`);
    UpdateItem(-1, Item, ItemPrice);
  });

  const RemoveButton = document.createElement('button');
  RemoveButton.innerText = 'Remove';
  RemoveButton.addEventListener('click', () => {
    RemoveItem(ItemName);
  });

  const stockDisplay = document.createElement('span');
  stockDisplay.classList.add('stock-count');
  stockDisplay.innerText = 1;

  const PriceDisplay = document.createElement('span');
  PriceDisplay.classList.add('Price-count');
  PriceDisplay.innerText = ItemPrice;

  QuantityContainer.append(
    DecreButton,
    stockDisplay,
    IncreButton,
    PriceDisplay,
    RemoveButton
  );

  if (document.querySelector('.empty-cart')) {
    cartItems.innerHTML = '';
  }

  container.append(ItemName, QuantityContainer);

  cartItems.appendChild(container);
  Total += ItemPrice;
  TotalPrice.innerText = `Total: $${parseFloat(Total.toFixed(2))}`;
}

function UpdateItem(number, Item, ItemPrice) {
  const QuantityControl = Item.querySelector('.quantity-controls');
  const stockDisplay = QuantityControl.querySelector('.stock-count');
  const priceDisplay = QuantityControl.querySelector('.Price-count');

  let CurrStock = parseInt(stockDisplay.innerText);
  let price = parseFloat(priceDisplay.innerText);

  CurrStock = CurrStock + number;
  if (CurrStock <= 0) return;
  price = parseFloat((ItemPrice * CurrStock).toFixed(2));
  Total += ItemPrice * number;

  stockDisplay.innerText = CurrStock;
  priceDisplay.innerText = price;
  TotalPrice.innerText = `Total: $${parseFloat(Total.toFixed(2))}`;
}
