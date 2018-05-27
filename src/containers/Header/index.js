import React, { Component } from 'react'

import PT from 'prop-types'

import { connect } from 'react-redux'

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
        const { header } = this.props
        console.log(this.props)

        return (
            <div>
                <h1> Was loaded {header.genreNames}
                </h1>
                
            </div>
        )
    }
}

    const mapStateToProps = (state) => {
        return {
            header: state.header,
        }
    }


Header.propTypes = {
    header: PT.object.isRequired,
    genreNames: PT.string.isRequired,
    genreNameLoad: PT.bool.isRequired,
    loadGenres: PT.func.isRequired,
}

export default connect(mapStateToProps, null)(Header)