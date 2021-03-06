import React, { Component, Fragment } from 'react'

import {
	Route,
	Link
} from 'react-router-dom'

import PT from 'prop-types'

import Genre from '../Genres/Genre'

import { connect } from 'react-redux'

import './styles.css'
import { loadGenres
		} from '../../actions/GenreActions'

class Genres extends Component {
	state = {
		genres: [],
	}

	componentDidMount() {
		this.props.loadGenres()
	  }
	  
	renderLinks = () => {
		const { match } = this.props
		const template = this.props.genres.data.map((el) => {
			return (
				<li className='App-listItem' key={el.id}>
					<Link
						to={`${match.url}/${el.name}`}
						className="App-link">
						{el.name}
					</Link>
				</li>
			)					
		})
		return template
	}

	
	render() {
		const { match, genres } = this.props

		if (genres.isLoading) {
			return (
				<div>Loading Genres</div>
			)
		}
	

		return (
			<Fragment>
				<div className='section'>Sections</div>
				<ul className='App-ul'>
					{ this.renderLinks() }
				</ul>
				
				<Route
					path={`${match.url}/:id`}
					component={() => {
						return <Genre />
					}} />
						
			</Fragment>
		)
	}
}

	const mapStateToProps = (state) => {
		return {
			genres: state.genres
		}
	}

	const mapDispatchToProps = (dispatch) => {
		return {
			loadGenres: ()=>(dispatch(loadGenres())),
		}
	}

	Genres.propTypes = {
		genres: PT.shape({
			isLoading: PT.bool.isRequired,
			data: PT.array.isRequired,
			errorMsg: PT.string,
		}).isRequired,
		loadGenres: PT.func.isRequired
	}

export default connect(mapStateToProps, mapDispatchToProps)(Genres)
