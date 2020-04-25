import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers';
import CGroupButton from './containers/CGroupButton.js';

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);



ReactDOM.render(<CGroupButton store={store} />, document.getElementById('root'));