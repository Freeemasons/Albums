import React, { Component } from 'react'

import './App.css'

import Admin from '../../components/Admin'
import Genres from '../Genres'
import Header from '../Header'
import Login from '../Login'

import {
	Route,
	Link
} from 'react-router-dom'

class App extends Component {

	render () {
		return(
			<div className='App-main'>
				<Header />
				<ul className='.App-ul App-ul--menu'>
					<li className='App-listItem'><Link to='/admin' className="App-link">Admin</Link></li>
					<li className='App-listItem'><Link to='/genres' className="App-link">Genres</Link></li>
					<li className='App-listItem'><Link to='/login' className="App-link">Log in</Link></li>
				</ul>
				<Route path="/admin" component={Admin} />
				<Route path="/genres" component={Genres} />
				<Route path="/login" component={Login} />		
			</div>
		);
	}
}


export default App;
