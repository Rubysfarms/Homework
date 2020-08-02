import React from 'react';
import './FilmCard.css';
export const FilmCard = ({props}) => {    
    return (
        <div className="filmCard">
            <div className="filmArt" style={{backgroundImage: `url(${props[3]})`}}></div>
            <div className='filmGeneralInfo'><p className="FilmCard_Name">{props[0]}</p><div className='rateMark_extra'>{props[1]}</div></div>
            <div className="filmGenres">{props[2]}</div>
        </div>
    );
  }