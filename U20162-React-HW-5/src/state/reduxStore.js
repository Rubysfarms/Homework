import { createStore } from 'redux';
import { initialValue } from './initValue';

const reduxReducer = (state = initialValue, action) => {
       
    switch (action.type) {
      case 'add':
        state.cart[action.id] = ++state.cart[action.id]             
        state = {...state, quantity: state.quantity + 1};
        localStorage.setItem('cart', JSON.stringify(state));
        return state
      case 'remove':
        state.cart[action.id] = --state.cart[action.id] 
        state = {...state, quantity: state.quantity - 1};
        localStorage.setItem('cart', JSON.stringify(state));
        return state
      case 'clear':
        state = {...state, quantity: state.quantity - state.cart[action.id]};
        state.cart[action.id] = 0;
        localStorage.setItem('cart', JSON.stringify(state));
        return state
      case 'empty':        
        state = {...state, cart: {0:0, 1:0, 2:0}, quantity:0};
        localStorage.setItem('cart', JSON.stringify(state));
        return state;
      case 'hidden':        
        state = {...state, visibility: 'hidden'};
        localStorage.setItem('cart', JSON.stringify(state));
        return state;
      case 'visible':        
        state = {...state, visibility: ''};
        localStorage.setItem('cart', JSON.stringify(state));
        return state;           
      default:
        return state;
    }
  }

  export const reduxStore = createStore(reduxReducer);