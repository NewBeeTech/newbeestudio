import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducer.js';
import { hashHistory,browserHistory } from 'react-router';
import {Router, Route} from 'react-router';
import './index.css';
import category from './tool/category.js'
import HomePage from './pages/HomePage.js'
import CaseDetailPage from './pages/CaseDetailPage'
//import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const rootElement = document.getElementById('root');
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(
    reducers,
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

window.dispatch = store.dispatch

render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={HomePage}>

        </Route>
        <Route path='/caseDetail' component={CaseDetailPage}>

        </Route>
      </Router>
    </Provider>,
    rootElement
);
