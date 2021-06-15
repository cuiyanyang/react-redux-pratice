import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { createStore } from 'redux'
import applyMiddleware from './applyMiddleware';
import { createLogger } from 'redux-logger'

const logger = createLogger();
const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger))

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Counter value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


store.subscribe(render);

render();


