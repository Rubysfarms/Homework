export const addProductToCart = (dispatch, id) => {
  console.log(dispatch, id);
  dispatch({type: 'update'});
  // const updatedCart = [...this.state.cart];
  // const updatedItemIndex = updatedCart.findIndex(
  //   item => item.id === product.id
  // );

  // if (updatedItemIndex < 0) {
  //   updatedCart.push({ ...product, quantity: 1 });
  // } else {
  //   const updatedItem = {
  //     ...updatedCart[updatedItemIndex]
  //   };
  //   updatedItem.quantity++;
  //   updatedCart[updatedItemIndex] = updatedItem;
  // }
  // localStorage.setItem('cart', JSON.stringify(updatedCart));
  // this.setState({ cart: updatedCart });
};

export const removeProductFromCart = productId => {        
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

export const removeProductCategory = categoryId => {    
  const categoryIndex = this.state.cart.indexOf(categoryId);
  const updatedCart = this.state.cart.filter((item, index) => {return index !== categoryIndex});
  localStorage.setItem('cart', JSON.stringify(updatedCart));    
  this.setState({ cart: updatedCart });
}


