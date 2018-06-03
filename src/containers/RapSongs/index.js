import React, { Component } from 'react'

import PT from 'prop-types'

import {
    Route,
    Link
} from 'react-router-dom'

import { connect } from 'react-redux'


class RapSongs extends Component {
    render() {
        return (
            <div >
                <div className='section'>Section /genre/d-n-b</div>
                <div>
                    {this.props.renderRapSongs}
                </div>
            </div>
        )
    }
}


export default RapSongs