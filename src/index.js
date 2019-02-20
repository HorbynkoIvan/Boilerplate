import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
//import {syncHistoryWithStore} from 'react-router-redux'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'

import reducers from 'reducers'
import Layout from 'containers/layout'
import Phones from 'containers/phones'
import Error from 'containers/Error'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

//const history = syncHistoryWithStore(BrowserRouter, store)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Layout>
                    <Switch>
                        <Route path='/' component={Phones} exact/>
                        <Route component={Error}/>
                    </Switch>
                </Layout>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
