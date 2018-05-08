import React, { Component } from 'react'

import './App.css'

import Admin from '../Admin'
import AlbumsList from '../AlbumsList'
import Dnb from '../Genre/Dnb'
import Genre from '../Genre'
import Home from '../Home'
import RAP from '../Genre/RAP'
import Rock from '../Genre/Rock'



import { Route, Link } from 'react-router-dom'

class App extends Component {


	render () {

		return(
			<div className='App-header'>
				<ul className='App-ul'>
					<li><Link to='/admin' className="App-link">Admin</Link></li>
					<li><Link to='/albums' className="App-link">AlbumsList</Link></li>
					<li><Link to='/genre' className="App-link">Genre</Link></li>
					<ul className='App-ul'>
						<li><Link to='/genre/d-n-b' className="App-link">D'n'B</Link></li>
						<li><Link to='/genre/rap' className="App-link">RAP</Link></li>
						<li><Link to='/genre/rock' className="App-link">ROCK</Link></li>
					</ul>
				</ul>
				<Route path="/admin" component={Admin} />
				<Route path="/albums" component={AlbumsList} />
				<Route path="/genre" component={Genre} />
				<Route path="/genre/d-n-b" component={Dnb} />
				<Route path="/genre/rap" component={RAP} />
				<Route path="/genre/rock" component={Rock} />
			</div>
		);
	}
}


export default App;
