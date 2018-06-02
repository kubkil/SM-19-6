import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers/reducer';
import {addComment} from './actions/actions';

const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(logger)
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
