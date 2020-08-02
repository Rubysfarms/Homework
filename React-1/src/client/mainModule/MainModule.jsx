import React from 'react';
import './MainModule.css';
import background from './background.png'
import {Header} from "./components/header";
import {About} from "./components/about";
export const MainModule = () => {
  return (
    <div className="advertContainer">
      <Header></Header>      
      <img src={background} className='advertBack' alt=''/>
      <About></About>      
    </div>
  );
}