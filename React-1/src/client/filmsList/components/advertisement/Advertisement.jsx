import React from 'react';
import './Advertisement.css';
export const Advertisement = () => {    
    return (
        <div className="advertisement" style={{backgroundImage: 'url(./backgroundAdvert.png)'}}>
            <div className="transparentBackground">
                <p className='advertText'>Receive information on the latest hit movies straight to your inbox</p>
                <button className='buttonSubscribe'>Subscribe</button>
            </div>            
        </div>
    );
  }