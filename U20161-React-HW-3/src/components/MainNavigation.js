import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

const mainNavigation = (props, context) => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({props.cartItemNumber})</NavLink>
        </li>
        <li>
          <div className='clear-button'onClick={()=>{localStorage.setItem('cart', 'false'); window.location.reload();}}>Clear cart</div>
        </li>        
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
