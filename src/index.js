import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import {  Layout } from 'antd';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import * as serviceWorker from './serviceWorker';
import Landing from './pages/Landing.js';

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);


class Router extends React.PureComponent {
    render() {
    return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout theme="light">
         <Route path="/" component={Landing} />
        
        {/*  <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={Tool} />
          <Route exact path="/doc" component={Documentation} />
          <Route exact path="/mapsettings" component={MapSetting} />
          */}
        </Layout>
      </BrowserRouter>
    </Provider>
        );
    }
}

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();