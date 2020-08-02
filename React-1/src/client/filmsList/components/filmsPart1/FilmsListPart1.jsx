import React from 'react';
import './FilmsListPart1.css';
import {FilmCard} from '../../../../shared/filmCard/FilmCard';
export const FilmsListPart1 = () => {
    const allFilms = [
        ['Fantastic beasts ...', '4.7', 'Adventure, Family, Fantasy', 'film1.png',],
        ['Assasin`s creed', '4.2', 'Action, Adventure, Fantasy', 'film2.png'],
        ['Now you see me 2','4.4', 'Action, Adventure, Comedy', 'film3.png'],
        ['The Legend of...', '4.3', 'Action, Adventure, Drama', 'film4.png'],
        ['Doctor strange', '4.8', 'Action, Adventure, Fantasy', 'film5.png'],
        ['Ninja turtles', '4.9', 'Action, Adventure, Sci-Fi', 'film6.png'],
        ['X-men', '4.1', 'Adventure, Action, Sci-Fi', 'film7.png'],
        ['Finding Dory', '4.7', 'Animantion, Adventure, Comedy', 'film8.png'],
        ['The BFG', '3.2', 'Family, Adventure, Fantasy', 'film9.png'],
        ['Independece day', '3.9', 'Action, Sci-Fi', 'film10.png'],
        ['Ice age', '4.5', 'Adventure, Comedy', 'film11.png'],
        ['Moanna', '4.9', 'Action, Fantasy', 'film12.png'],
    ];
    const allFilmsModule = allFilms.map(item => {
        const index = allFilms.indexOf(item);        
        return <FilmCard key={index} props={item}></FilmCard>  
    });
    
    return (
        <div className="filmsListPart1">{allFilmsModule}</div>
    );
  }