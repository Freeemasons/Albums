import React, { Component } from 'react'
import {
	Route,
	Link
} from 'react-router-dom'

import Dnb from '../Genre/Dnb'

import './styles.css'
import { connect } from 'react-redux'
import { onLoadingGenreNames, loadGenres, setGenreHeader } from '../../GenreActions'

class Genre extends Component {
	state = {
		genres: [],
		changeName:false
	}

	componentDidMount() {
		this.props.loadGenres()
	  }
	  
// 	  <li key={el.id}>
// 	<Link
// 		to={`${match.url}/${el.name}`}
// 		className="App-link">
// 		{el.name}
// 	</Link>
// </li>


	renderLinks = () => {
		const { match } = this.props
		const template = this.props.genres.data.map((el) => {
			console.log(el)
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
		// return template
		return template
	}


	handleGenreRefresh = () => {
		this.setState({ changeName:true })
	}

	if (changeName) {
		return (
			this.props.setGenreHeader()
		)
	}
	
	render() {
		const { match, status, genres } = this.props
		console.log(this.props.genres)

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
				<Route path={`${match.url}/:id`} component={Dnb} />
				<input
					type='button'
					value='Load Genre'
					className='Button Button--orange'
					onClick={this.handleGenreRefresh}
				/>
				
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		// status: state.genres.isLoading,
		genres: state.genres
	}
}

const mapDispatchToProps = (dispatch) => {
	return {loadGenres: ()=>(dispatch(loadGenres()))}
}

// const mapDispatchToProps = (dispatch) => {
// 	return { setGenreHeader: () => (dispatch(setGenreHeader())) }
// }


// const mapDispatchToProps = (dispatch) => {
// 	return {loadGenres: ()=>(dispatch({
//     type: LOADINGGENRES_REQUEST,
//   }))}
// }

export default connect(mapStateToProps, mapDispatchToProps)(Genre)
