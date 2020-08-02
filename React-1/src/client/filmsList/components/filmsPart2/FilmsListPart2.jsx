import React from 'react';
import './FilmsListPart2.css';
import {FilmCard} from '../../../../shared/filmCard/FilmCard';
export const FilmsListPart2 = () => {
    const allFilms = [        
        ['Now you see me 2','4.4', 'Action, Adventure, Comedy', 'film3.png'],
        ['The Legend of Tarsan', '4.3', 'Action, Adventure, Drama', 'film4.png'],        
        ['X-men', '4.1', 'Adventure, Action, Sci-Fi', 'film7.png'],               
        ['Ice age', '4.5', 'Adventure, Comedy', 'film11.png'],        
    ];
    const allFilmsModule = allFilms.map(item => {
        const index = allFilms.indexOf(item);        
        return <FilmCard key={index} props={item}></FilmCard>  
    });
    
    return (
        <div className="filmsListPart2">{allFilmsModule}</div>
    );
  }