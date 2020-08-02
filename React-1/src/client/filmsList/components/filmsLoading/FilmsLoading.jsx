import React from 'react';
import './FilmsLoading.css';
export const FilmsLoading = () => {      
    return (
        <div className="filmsLoading">
            <div className="loadingIMG" style={{backgroundImage: 'url(./loading.png)'}}></div>
            <span className='loadingText'>Loading</span>
        </div>
    );
  }