import React from 'react';
import './Cart.css';
import products from '../state/ShopItems';

const CartPage = ({visibility, state, dispatch, setVisibility}) => {   
    const className = `cart ${visibility}`;
      return (        
      <React.Fragment>
        <main className={className}>
          {state.quantity <= 0 && <p>No Item in the Cart!</p> ||
          <ul>
            {products.map(cartItem => ( state[cartItem.id] > 0 &&
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {state[cartItem.id]})
                </div>
                <div>
                <button onClick={()=>dispatch({type: 'add', id:cartItem.id})}>+</button>
                  <button onClick={()=> dispatch({type: 'remove', id:cartItem.id})}>-</button>
                  <button onClick={()=> dispatch({type: 'clear', id:cartItem.id})}>Remove from Cart</button>
                </div>
              </li>
            ))}
          </ul>
          }
          <button className='regular-button' onClick={()=>setVisibility('hidden')}>Close cart</button>
        </main>
      </React.Fragment>
    );  
}

export default CartPage;
