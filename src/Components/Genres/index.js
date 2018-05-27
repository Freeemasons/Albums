import React, { Component } from 'react'
import {
	Route,
	Link
} from 'react-router-dom'

import Genre from '../Genres/Genre'
import { connect } from 'react-redux'

import './styles.css'
import { onLoadingGenreNames, loadGenres, setGenreHeader } from '../../GenreActions'

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
				<li key={el.id}>
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


	handleGenreRefresh = (a) => {
		this.props.onSetGenreHeader(a)
	}
	
	render() {
		const { match, genres } = this.props

		if (genres.isLoading) {
			return (
				<div>Loading</div>
			)
		}
	
			return (
			<div>
				<div className='section'>Раздел /genre</div>
				<ul className='App-ul'>
					{ this.renderLinks() }
				</ul>
				<Route path={`${match.url}/:id`} component={()=>{
					return	<Genre setName={this.handleGenreRefresh}/>
				}} />		
			</div>
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
		onSetGenreHeader: (name) => (dispatch(setGenreHeader(name)))
	}
}


// const mapDispatchToProps = (dispatch) => {
// 	return {loadGenres: ()=>(dispatch({
//     type: LOADINGGENRES_REQUEST,
//   }))}
// }

export default connect(mapStateToProps, mapDispatchToProps)(Genres)
