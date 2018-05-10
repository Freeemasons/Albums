import React, { Component } from 'react'

import './App.css'

import Admin from '../Admin'
import AlbumsList from '../AlbumsList'
import Genre from '../Genre'

import {
	Route,
	Link
} from 'react-router-dom'

class App extends Component {

	render () {
		return(
			<div className='App-header'>
				<ul className='App-ul'>
					<li><Link to='/admin' className="App-link">Admin</Link></li>
					<li><Link to='/albums' className="App-link">AlbumsList</Link></li>
					<li><Link to='/genre' className="App-link">Genre</Link></li>
				</ul>
				<Route path="/admin" component={Admin} />
				<Route path="/albums" component={AlbumsList} />
				<Route path="/genre" component={Genre} />
			</div>
		);
	}
}


export default App;
