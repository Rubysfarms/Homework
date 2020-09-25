import React, {useReducer, useState} from 'react';
import {Timer} from './components/timer';
import {Reducer} from './components/reducer';

function App() {
  const [state, dispatch] = useReducer(Reducer, 0);

  

  const stopwatch = () => {
    dispatch({type: 'start'});
  }

  // let interval = setInterval(stopwatch);
  // setStopwatch = ({stopwatch}) => {    
  //   console.log(stopwatch)    
  //   const zalupa = {...stopwatch, timer:'qwe'};
  //   // link = setInterval(()=>{dispatch({type: 'start'})}, 100);
  //   return zalupa;

  //   // switch (boolean) {
  //   //   case true:
  //   //     stopwatch = setInterval(()=>{dispatch({type: 'start'})}, 100);        
  //   //   break;
  //   //   case false:
  //   //       console.log(stopwatch);
  //   //       clearInterval(stopwatch);        
  //   //   break;     
    
  // }


  return (
    <div className="App">
      <div className="stopwatch">
        <h1>STOPWATCH</h1>
        <h1>REACT & REDUX STOPWATCH</h1>
        <Timer data={state}/>
        <div>
          <button onClick={()=>setInterval(stopwatch,100)}>Start</button>
          <button onClick={() => {dispatch({type: 'stop'})}}>Stop</button>
          <button onClick={() => {dispatch({type: 'reset'})}}>Reset</button>     
        </div>
      </div>
    </div>
  );
}

export default App;
