import React from 'react';
import ReactDOM from 'react-dom';
// https://redux.js.org/basics/example-todo-list import render?
import { render } from 'react-dom'
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import {addComment} from './actions/actions';

const store = createStore(reducer);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
