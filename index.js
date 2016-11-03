var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random()*100);

  getCart().push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

function viewCart() {
  var response = 'In your cart, you have ';

  if (getCart().length==0) {
    response = 'Your shopping cart is empty.';
  } else {
    var cartItems = [];
    for (var i = 0; i < getCart().length; i++) {
      let key = Object.keys(getCart()[i])[0];
      cartItems.push(`${key} at $${getCart()[i][key]}`);
    }
    response += `${cartItems.join(', ')}.`;
  }
  console.log(response);
  return getCart();
}

function removeFromCart(item) {
  var removeIndex;
  for (var key in getCart()) {
    if (getCart()[key].hasOwnProperty([item])) {
      removeIndex = parseInt(key);
    }
  }
  if (removeIndex != null){
    getCart().splice(removeIndex,1)
  }else {
    console.log('That item is not in your cart.');
  }
  return getCart();
}

function placeOrder(ccn) {
  if (ccn != null) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccn}.`);
    setCart([]);
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
