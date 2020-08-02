import React from 'react';
import './App.css';
import {MainModule} from "../../../client/mainModule";
import {FilmsList} from "../../../client/filmsList";
import {Footer} from "../../../client/footer";
export const App = () => {
  return (
    <>    
      <MainModule></MainModule>
      <FilmsList></FilmsList>
      <Footer></Footer>
    </>
  );
}