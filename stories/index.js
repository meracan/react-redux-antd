import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../src/reducers';



import Button from '../src/components/Button.js';
import CButton from '../src/containers/CButton.js';
import CGroupButton from '../src/containers/CGroupButton.js';


const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);



storiesOf('Components', module,{ reload: true })    
        .add('Button', () => (<Button name="Static" clickButton={()=>console.log("here")} />))

storiesOf('Containers', module,{ reload: true })    
        .add('Button', () => (
          <Provider store={store}>
              <CButton />
          </Provider>
          ))
        .add('GroupButton', () => (
          <Provider store={store}>
              <CGroupButton />
          </Provider>
          ))
        