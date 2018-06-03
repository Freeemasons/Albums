import React, { Component, Fragment } from 'react'
import {
	Route,
	Link
} from 'react-router-dom'

import PT from 'prop-types'

import Genre from '../Genres/Genre'

import RapSongs from '../RapSongs'

import { connect } from 'react-redux'

import './styles.css'
import { loadGenres, 
		setGenreHeader, 
		loadSonglistDnb,
		loadSonglistRap,
		loadSonglistRock } from '../../actions/GenreActions'

class Genres extends Component {
	state = {
		genres: [],
	}

	componentDidMount() {
		this.props.loadGenres()
		this.props.loadSonglistDnb()
		this.props.loadSonglistRap()
		this.props.loadSonglistRock()
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

	renderRapSongs = () => {
		const { match } = this.props
		const rapSongs = this.props.genre.dataSongList.map((el) => {
			return (
				<li className='App-listItem' key={el.id}>
					<Link
						to={`${match.url}/${el.video}`}
						className="App-link">
						{el.video}
					</Link>
				</li>
			)	
		})
		return rapSongs
	}



	// handleGenreRefresh = (a) => {
	// 	this.props.onSetGenreHeader(a)
	// }

	//написать новый роут /сонг /рап /айди
	
	render() {
		const { match, genres, genre } = this.props
		// console.log(match)

		if (genres.isLoading) {
			return (
				<div>Loading</div>
			)
		}
	
		// <Route
		// 	path="rap/rapSongs"
		// 	component={() => {
		// 		return <RapSongs renderRapSongs={this.renderRapSongs()} />
		// 	}} />

		return (
			<Fragment>
				<div className='section'>Sections</div>
				<ul className='App-ul'>
					{ this.renderLinks() }
				</ul>
				
				<Route
					path={`${match.url}/:id`}
					component={() => {
						return <Genre renderRapSongs={this.renderRapSongs()}/>
					}} />
						
			</Fragment>
		)
	}
}

	const mapStateToProps = (state) => {
		return {
			genres: state.genres,
			genre: state.genre
		}
	}

	const mapDispatchToProps = (dispatch) => {
		return {
			loadGenres: ()=>(dispatch(loadGenres())),
			onSetGenreHeader: (name) => (dispatch(setGenreHeader(name))),
			loadSonglistRap: () => (dispatch(loadSonglistRap())),
			loadSonglistDnb: () => (dispatch(loadSonglistDnb())),
			loadSonglistRock: () => (dispatch(loadSonglistRock())),
		}
	}


// const mapDispatchToProps = (dispatch) => {
// 	return {loadGenres: ()=>(dispatch({
//     type: LOADINGGENRES_REQUEST,
//   }))}
// }

	Genres.propTypes = {
		genres: PT.shape({
			isLoading: PT.bool.isRequired,
			data: PT.array.isRequired,
			errorMsg: PT.string,
		}).isRequired,
		genre: PT.shape({
			isLoading: PT.bool.isRequired,
			dataSongList: PT.array.isRequired,
			errorMsg: PT.string,
		}).isRequired,
		loadGenres: PT.func.isRequired,
		onSetGenreHeader: PT.func.isRequired,
	}

export default connect(mapStateToProps, mapDispatchToProps)(Genres)
