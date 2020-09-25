import React from 'react';

export const Timer = ({data}) => {
    const storage = JSON.parse(localStorage.getItem('time'));
    storage ? data = storage : data = data;
    const seconds = (data/10).toString().split('.')[0];    
    const miliseconds = data - 10*parseInt(seconds);  
    return(
    <div className='timer'>{seconds}:{miliseconds}0</div>
    )
}