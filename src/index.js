import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import reducers from 'reducers'
import Layout from 'containers/layout'
import Phones from 'containers/phones'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(BrowserRouter, store)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={Layout}>
                <Route path='/' component={Phones} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
