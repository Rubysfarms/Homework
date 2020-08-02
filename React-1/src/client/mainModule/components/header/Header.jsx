import React from 'react';
import './Header.css';
import background from './background.png';
export const Header = () => {
  return (
    <div className="header">
      <img src={background} className='headerBack' alt=''/>
      <div className="menu">
        <div className='logoMain'>
          <span className='logoBold'>MOVIE</span>
          <span className='logoThin'>RISE</span>
        </div>
        <div className='userControls'>
          <button className='iconButton' style={{backgroundImage: 'url(./search.png)'}}></button>
          <button className='mainButton buttonRegular'>Sign in</button>
          <button className='mainButton buttonHighlighted'>Sign up</button>
        </div>        
      </div>     
    </div>
  );
}