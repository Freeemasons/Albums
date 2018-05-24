import React, { Component } from 'react'

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
        <div>Раздел /genre/d-n-b</div>
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



export default withRouter(Genre)
