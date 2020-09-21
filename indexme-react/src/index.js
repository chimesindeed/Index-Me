import React from 'react'; import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux' 
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as Routing from './Routes/Routes'

import rootReducer from './State/reducers/reducers'
const store = createStore(rootReducer,
compose(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store= {store}>
    <Router>
      <div>
        <Route exact path="/" component={ Routing.WelcomeRoute } />
        <Route exact path="/getcards" component={ Routing.GetCardsRoute } />
        <Route exact path="/createcard" component={ Routing.CreateCardRoute } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);