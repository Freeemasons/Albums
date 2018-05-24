import React, { Component } from 'react'

import { connect } from 'react-redux'
import {
    Route,
    Link
} from 'react-router-dom'

import { setGenreHeader } from '../../GenreActions'

class Header extends Component {

    state ={
        genreName:[],
        genreNameLoad:false
    }

    componentDidMount() {
        this.handleGenreNameChange()
    }

    handleGenreNameChange = () => {
        this.setState({ genreNameLoad: true })
    }


    // { this.props.data.genre.name }


    // { genreName ? 'Loading' : 'имя жанра' }

    if(genreNameLoad) {
        return (
            <div>Loading</div>
        )
    }

    render() {
        const { genreName } = this.state
        const { genres } = this.props


        return (
            <div>
                <h1> Was loaded { }
                </h1>
                
            </div>
        )
    }
}

    const mapStateToProps = (state) => {
        return {
            genres: state.genres
        }
    }



export default connect(mapStateToProps, null)(Header)



//4 сделай кнопку, по нажатию на которую будет передаваться экшен, с именем, 
//которое будет рисоваться в шапке. Данные по имени в шапке должны браться из редьюсера names