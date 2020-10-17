import React from 'react';
import { connect, Provider } from 'react-redux';
import MainNavigation from '../src/components/MainNavigation';
import {reduxStore} from './state/reduxStore';

const App  = () => {
  
  const mapStateToProps = (store) => {
    return store
  }

  const WrappedMainComponent = connect(mapStateToProps)(MainNavigation);

    return (
      <Provider store={reduxStore}>
        <WrappedMainComponent/>        
      </Provider>      
    );  
}

export default App;
