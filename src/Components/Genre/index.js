import React, { Component } from 'react'
import {
	Route,
	Link
} from 'react-router-dom'

import Dnb from '../Genre/Dnb'
import RAP from '../Genre/RAP'
import Rock from '../Genre/Rock'

import './styles.css'

export default class Genre extends Component {

	render() {
		const { match } = this.props

		return (
			<div>
				<div className='section'>Раздел /genre</div>
				<ul className='App-ul'>
					<li><Link to={`${match.url}/d-n-b`} className="App-link">D'n'B</Link></li>
					<li><Link to={`${match.url}/rap`} className="App-link">RAP</Link></li>
					<li><Link to={`${match.url}/rock`} className="App-link">ROCK</Link></li>
				</ul>
				<Route path={`${match.url}/:id`} component={Dnb} />
			</div>
		)
	}
}
