import React from 'react';
import './Cart.css';
import products from '../state/ShopItems';

const CartPage = ({cart, quantity, dispatch, visibility}) => {  
    const className = `cart ${visibility}`;
      return (        
      <React.Fragment>
        <main className={className}>
          {quantity <= 0 && <p>No Item in the Cart!</p> ||
          <ul>
            {products.map(cartItem => ( cart[cartItem.id] > 0 &&
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cart[cartItem.id]})
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
          <button className='regular-button' onClick={()=>dispatch({type:'hidden'})}>Close cart</button>
        </main>
      </React.Fragment>
    );  
}

export default CartPage;
