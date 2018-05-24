import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './Components/App';
// import Home from '../Home'
// import Genre from '../Genre'
import { Provider } from 'react-redux'
// import configureStore from '../configureStore'
import reducer from './Reducers'

import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const store = configureStore()
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// store.dispatch(onLoadingGenreNames)
//const boundAddTodo = (text) => dispatch(addTodo(text))

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
)
