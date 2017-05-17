import React from 'react';

import Timer from './Timer';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';

import './App.css';

const store = configureStore();

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Redux demo: Timer App</h2>
        </div>
        <div className="App-intro">
          <Provider store={store} >
            <Timer />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
