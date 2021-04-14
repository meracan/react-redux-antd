import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

import { IntlProvider } from 'react-intl-redux'
import ThemeProvider from 'redux/themeProvider'
import initialState from './initialState';

const middleware = applyMiddleware(thunk,logger);


const store = createStore(reducers,initialState, middleware);

export default (props)=>(
<Provider store={store}>
  <IntlProvider>
    <ThemeProvider>
      {props.children}
    </ThemeProvider>
  </IntlProvider>
</Provider>
)