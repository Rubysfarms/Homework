import React from 'react';
import './About.css';
import background from './background.png';
import rates from './star.png';
export const About = () => {
  return (
    <div className="about">
      <img src={background} className='aboutBack' alt=''/>
      <div className="mainFilmInfo">      
        <p className="filmName">The Jungle Book</p>
        <p className="genre">Adventure Drama Family Fantasy | 1h45m</p>
        <div className='extraInfo'>
          <div className="rates">
            <img src={rates} className='rateStar' alt=''/>   
            <img src={rates} className='rateStar' alt=''/>
            <img src={rates} className='rateStar' alt=''/>   
            <img src={rates} className='rateStar' alt=''/>
            <img src={rates} className='rateStar' alt=''/>
            <span className='rateMark'>4.8</span>      
          </div>        
        <div className="moreInfo">
          <button className='mainButton buttonHighlighted'>Watch now</button>
          <button className='mainButton buttonSemiHighlighted'>View info</button>
          <button className='mainButton buttonRegular'>+ Favorites</button>
          <button className='iconButton' style={{backgroundImage: 'url(./3dots.png)'}}></button>
        </div>
        </div>
      </div>
    </div>
  );
}