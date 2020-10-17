import React from 'react';
import './MainNavigation.css';
import ProductsPage from './Products';
import CartPage from '../components/Cart';
import { connect, Provider } from 'react-redux';
import {reduxStore} from '../state/reduxStore';

const MainNavigation = ({dispatch, quantity}) => {
  
  const mapStateToProps = (state) => {
    return state
  }
  
  const WrappedCardPage = connect(mapStateToProps)(CartPage);
    
  return(
    <>
    <header className="main-navigation">
      <nav>
        <ul>
          <li><div className='regular-button' onClick={()=>dispatch({type: 'hidden'})}>Products</div></li>
          <li><div className='regular-button' onClick={()=>dispatch({type: 'visible'})}>Cart({quantity})</div></li>
          <li><div className='clear-button' onClick={()=>dispatch({type: 'empty'})}>Clear cart</div></li>        
        </ul>
      </nav>
    </header>
    <ProductsPage dispatch={dispatch}/>
    <Provider store={reduxStore}>
      <WrappedCardPage/>
    </Provider>    
  </>
  )
};

export default MainNavigation;
