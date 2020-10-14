import React, {useReducer, useState} from 'react';
import MainNavigation from '../src/components/MainNavigation';

const App  = () => {
  const [visibility, setVisibility] = useState('hidden');  
  const initialValue = JSON.parse(localStorage.getItem('cart')) || {0:0, 1:0, 2:0, quantity:0}
  let result = initialValue;

  const reducer = (state, action) => {
    
    switch (action.type) {
      case 'add':
        result = {...state, quantity: state.quantity + 1, [action.id]: state[action.id] + 1 };
        localStorage.setItem('cart', JSON.stringify(result));
        return result
      case 'remove':
        result = {...state, quantity: state.quantity - 1, [action.id]: state[action.id] - 1 };
        localStorage.setItem('cart', JSON.stringify(result));
        return result
      case 'clear':
        result = {...state, quantity: state.quantity - state[action.id], [action.id]: 0 };
        localStorage.setItem('cart', JSON.stringify(result));
        return result
      case 'empty':        
        result = {0:0, 1:0, 2:0, quantity:0};
        localStorage.setItem('cart', JSON.stringify(result));
        return result;           
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
    return (
      <>
        <MainNavigation state={state} dispatch={dispatch} setVisibility={setVisibility} visibility={visibility}/>       
      </>      
    );  
}

export default App;
