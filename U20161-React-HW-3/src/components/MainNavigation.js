import React from 'react';
import './MainNavigation.css';
import ProductsPage from './Products';
import CartPage from '../components/Cart';

const MainNavigation = ({state, dispatch, setVisibility, visibility}) => {   
  return(
    <>
    <header className="main-navigation">
      <nav>
        <ul>
          <li><div className='regular-button' onClick={()=>setVisibility('hidden')}>Products</div></li>
          <li><div className='regular-button' onClick={()=>setVisibility('')}>Cart({state.quantity})</div></li>
          <li><div className='clear-button' onClick={()=>dispatch({type: 'empty'})}>Clear cart</div></li>        
        </ul>
      </nav>
    </header>
    <ProductsPage dispatch={dispatch}/>
    <CartPage visibility={visibility} state={state} dispatch={dispatch} setVisibility={setVisibility}/>    
  </>
  )
};

export default MainNavigation;
