import React from 'react';
import './FilmsList.css';
import {Groups} from "./components/groups";
import {FilmsListPart1} from "./components/filmsPart1";
import {FilmsListPart2} from "./components/filmsPart2";
import {Advertisement} from "./components/advertisement";
import {FilmsLoading} from "./components/filmsLoading";
export const FilmsList = () => {
  return (
    <div className="filmsContainer">
      <Groups></Groups>
      <FilmsListPart1></FilmsListPart1>
      <Advertisement></Advertisement>
      <FilmsListPart2></FilmsListPart2>
      <FilmsLoading></FilmsLoading>             
    </div>
  );
}