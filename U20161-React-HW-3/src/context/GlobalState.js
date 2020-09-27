import React, { Component } from 'react';
import ShopContext from './shop-context';

class GlobalState extends Component {
  state = {
    products: [
      { id: 'itemID1', title: 'Orange', price: 0.5, image: 'banana.jpg' },
      { id: 'itemID2', title: 'Banana', price: 1.22, image: 'orange.jpg' },
      { id: 'itemID3', title: 'Lemon', price: 5.0, image: 'lemon.jpg'}      
    ],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  };

  addProductToCart = product => {    
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    this.setState({ cart: updatedCart });
  };

  removeProductFromCart = productId => {        
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );
    
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    this.setState({ cart: updatedCart });
  };

  removeProductCategory = categoryId => {    
    const categoryIndex = this.state.cart.indexOf(categoryId);
    const updatedCart = this.state.cart.filter((item, index) => {return index !== categoryIndex});
    localStorage.setItem('cart', JSON.stringify(updatedCart));    
    this.setState({ cart: updatedCart });
  }

  render() {
    return (
      <ShopContext.Provider
        value={{
          products: this.state.products,
          cart: this.state.cart,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart,
          removeProductCategory: this.removeProductCategory
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export default GlobalState;
