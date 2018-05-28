import React, { Component } from 'react'

import PT from 'prop-types'

import { connect } from 'react-redux'

import './styles.css'

class Header extends Component {

    render() {
        const { header } = this.props

        return (
            <div className='App-header'>
                <h1> Was loaded {header}
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
    header: PT.string.isRequired,
}

export default connect(mapStateToProps, null)(Header)