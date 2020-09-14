import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './Components/App';
import Home from './Components/Home';
import About from './Components/About';
import CreateCard from './Components/CreateCard';
import './index.css'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux' 
import thunk from 'redux-thunk'
import cardReducer from './Reducers/cardReducer'

const store = createStore(cardReducer,
compose(applyMiddleware(thunk)))
ReactDOM.render(
  
  <Router>
    <Provider store= {store}>
      <div>
        <App/>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/createcard" component={CreateCard} />
      </div>
    </Provider>
  </Router>,
  document.getElementById('root')
);
