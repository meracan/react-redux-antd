import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../../src/reducers';
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

import {Button} from '../../src/containers';

export default {
  title: 'Containers/Button',
  component: Button,
};

const Template=(args) => <Provider store={store}><Button /> </Provider>;
export const Primary = Template;
