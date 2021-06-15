import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
// import {createStore} from 'redux'
import createStore from './createStore';
import reducers from './reducers';

console.log(reducers);
// const reducer = (state = 0, action) => {
//   switch(action.type) {
//     case 'ADD':
//       return state + 1;
//     case 'DEC':
//       return state - 1;
//     default:
//       return state;
//   }
// }

const store = createStore(reducers)

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Counter value={store.getState().counter}
        onIncrement={() => store.dispatch({type: 'ADD'})}
        onDecrement={() => store.dispatch({type: 'DEC'})} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

const test = () => {
  console.log('测试')
}

store.subscribe(render);
store.subscribe(test);

render();


