import React, { Component } from 'react'

import './App.css'

import Admin from '../../components/Admin'
import AlbumsList from '../../components/AlbumsList'
import Genres from '../Genres'
import Header from '../Header'

import {
	Route,
	Link
} from 'react-router-dom'

class App extends Component {

	render () {
		return(
			<div className='App-main'>
				<Header />
				<ul className='App-ul'>
					<li className='App-listItem'><Link to='/admin' className="App-link">Admin</Link></li>
					<li className='App-listItem'><Link to='/albums' className="App-link">AlbumsList</Link></li>
					<li className='App-listItem'><Link to='/genre' className="App-link">Genres</Link></li>
				</ul>
				<Route path="/admin" component={Admin} />
				<Route path="/albums" component={AlbumsList} />
				<Route path="/genre" component={Genres} />		
			</div>
		);
	}
}


export default App;
