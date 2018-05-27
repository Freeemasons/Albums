import React, { Component } from 'react'

import { connect } from 'react-redux'
import {
    Route,
    Link
} from 'react-router-dom'

import { setGenreHeader } from '../../GenreActions'

class Header extends Component {

    state ={
        genreNameLoad:false
    }


    if(genreNameLoad) {
        return (
            <div>Loading</div>
        )
    }

    render() {
        const { genreName } = this.state
        const { genres } = this.props
        console.log(this.props)

        return (
            <div>
                <h1> Was loaded {genres.genreNames}
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