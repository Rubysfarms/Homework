import React from 'react';

export default React.createContext({
  products: [
    { id: 'itemID1', title: 'Orange', price: 0.5, image: 'banana.jpg'},
    { id: 'itemID2', title: 'Banana', price: 1.22, image: 'orange.jpg' },
    { id: 'itemID3', title: 'Lemon', price: 5.0, image: 'lemon.jpg'},    
  ],
  cart: [
    
  ],
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
  removeProductCategory: categoryId => {}
});
