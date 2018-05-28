import React, { Component } from 'react'

import PT from 'prop-types'

import { withRouter } from 'react-router'

import './styles.css'

class Genre extends Component {

  setNameHandler = () => {
    this.props.setName(this.props.match.params.id)
  }

  render() {
    console.log(this.props)

    return (
      <div >
        <div className='section'>Section /genre/d-n-b</div>
        <input
          type='button'
          value='Load Genre'
          className='Button Button--orange'
          onClick={this.setNameHandler}
        />
      </div>
    )
  }
}

Genre.propTypes = {
  setNameHandler: PT.func.isRequired,
  setName: PT.func.isRequired
}


export default withRouter(Genre)
