import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import EventFrom from './EventFrom';
import Events from './Events'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers';

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={ 'I am a Provider'}>
      <div className="container-fluid">
        <EventFrom state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/>
      </div>
    </AppContext.Provider>
  );
}

export default App;