/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];

/* Create 3 or more product objects using object literal notation
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
cherry = {
  name: "Cherry",
  price: 5,
  quantity: 0,
  productId: 0,
  image: "images/cherry.jpg",
};
orange = {
  name: "Orange",
  price: 10,
  quantity: 0,
  productId: 1,
  image: "images/orange.jpg",
};
strawberry = {
  name: "Strawberry",
  price: 15,
  quantity: 0,
  productId: 2,
  image: "images/strawberry.jpg",
};
products.push(...[cherry, orange, strawberry]);
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
const addProductToCart = (productId) => {
  products.forEach((element) => {
    if (element.productId === productId) {
      element.quantity++;
      cart.includes(element) ? {} : cart.push(element);
    }
  });
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
const increaseQuantity = (productId) => {
  products.forEach((element) => {
    element.productId == productId ? element.quantity++ : {};
  });
};

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
const decreaseQuantity = (productId) => {
  products.forEach((element) => {
    if (element.productId == productId) {
      if (element.quantity <= 1) {
        let index = cart.indexOf(element);
        cart.splice(index, 1);
        element.quantity = 0;
      } else {
        element.quantity--;
      }
    }
  });
};

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
const removeProductFromCart = (productId) => {
  products.forEach((element) => {
    if (element.productId == productId) {
      let index = cart.indexOf(element);
      cart.splice(index, 1);
      element.quantity = 0;
    }
  });
};

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
const cartTotal = () => {
  let totalSum = 0;
  cart.forEach((element) => {
    totalSum += element.price * element.quantity;
  });
  return totalSum;
};

/* Create a function called emptyCart that empties the products from the cart */
const emptyCart = () => {
  cart = [];
};

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid = 0;
const pay = (amount) => {
  totalPaid += amount
  return totalPaid - cartTotal();
};

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests.
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
