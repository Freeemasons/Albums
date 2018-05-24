import React, { Component } from 'react'

import './App.css'

import Admin from '../Admin'
import AlbumsList from '../AlbumsList'
import Genres from '../Genres'
import Header from '../Header'

import {
	Route,
	Link
} from 'react-router-dom'

class App extends Component {

	// { this.props.match.params.id }


	render () {
		return(
			<div className='App-main'>
				<Header />
				<ul className='App-ul'>
					<li><Link to='/admin' className="App-link">Admin</Link></li>
					<li><Link to='/albums' className="App-link">AlbumsList</Link></li>
					<li><Link to='/genre' className="App-link">Genres</Link></li>
				</ul>
				<Route path="/admin" component={Admin} />
				<Route path="/albums" component={AlbumsList} />
				<Route path="/genre" component={Genres} />
			</div>
		);
	}
}


export default App;
